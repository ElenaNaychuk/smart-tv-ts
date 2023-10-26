import React, {FormEvent, useEffect, useRef, useState} from "react";
import InputMask from "react-input-mask";
import {Keyboard} from "../Keyboard/Keyboard";
import {ac, cl, co} from "../../pages/RegistrationPage/buttonsMap";
import "./RegistrationForm.scss";
import {requestValidNumber} from "./requestValidNumber";

interface RegistrationFormProps {
    setFinishedRegistering: (value: boolean) => void;
    setSetFocus: (btnKey: string, setFocus: () => void) => void;
    onInvalid: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({setFinishedRegistering, setSetFocus, onInvalid}) => {
    const [phoneValue, setPhoneValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isNumberValid, setIsNumberValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const confirmBtnRef = useRef<HTMLButtonElement | null>(null);
    const acceptInputRef = useRef<HTMLInputElement | null>(null);

    const isValidForm = phoneValue.length === 10 && isChecked;

    useEffect(() => {
        setSetFocus(ac, () => acceptInputRef.current?.focus());
        setSetFocus(co, () => confirmBtnRef.current?.focus());
    }, []);

    const onKeyPress = (value: string) => {
        setPhoneValue((phoneValue) => {
            if (value === cl) {
                return phoneValue.slice(0, -1);
            } else if (phoneValue.length < 10) {
                return phoneValue + value;
            }
            return phoneValue;
        });
        setIsNumberValid(true);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isValidForm) return;

        setIsLoading(true);
        const response = await requestValidNumber(phoneValue);
        setIsLoading(false);

        setIsNumberValid(response.valid)
        setFinishedRegistering(response.valid);
        if(!response.valid) {
            onInvalid();
        }
    }

    return (
        <div className='registrationForm-container'>
            <p className='registrationForm-title'>Введите ваш номер мобильного телефона</p>
            <form className='registrationForm-form' onSubmit={handleSubmit}>
                <label className='form-input-container'>
                    <InputMask
                        className={isNumberValid ? 'form-input' : 'form-input form-input-error'}
                        mask='+7(999)999-99-99'
                        alwaysShowMask={true}                //Warning: findDOMNode is deprecated in StrictMode
                        value={phoneValue}                   //https://github.com/sanniassin/react-input-mask/issues/239
                        readOnly
                    />
                    и с Вами свяжется наш менеждер для <br/> дальнейшей консультации
                </label>
                <div className='form-buttons'>
                    <Keyboard
                        onKeyPress={onKeyPress}
                        setSetFocus={setSetFocus}
                    />
                </div>
                <div className="form-check">
                    {!isNumberValid
                        ? <p className="form-check-error">Неверно введён номер</p>
                        : <>
                            <input
                                id='radio'
                                data-key={ac}
                                ref={acceptInputRef}
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                className="form-check-input"
                                type="radio"
                            />
                            <label className="form-check-label" htmlFor='radio'>
                                <span></span>Согласие на обработку персональных данных
                            </label>
                        </>
                    }
                </div>
                <button
                    data-key={co}
                    className="form-button"
                    disabled={!isValidForm}
                    ref={confirmBtnRef}
                >
                    {isLoading ? 'Loading...' : 'Подтвердить номер'}
                </button>
            </form>
        </div>
    )
}
export {RegistrationForm};