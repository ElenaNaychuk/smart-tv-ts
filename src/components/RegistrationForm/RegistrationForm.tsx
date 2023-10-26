import React, {FormEvent, MutableRefObject, useEffect, useRef, useState} from "react";
import InputMask from "react-input-mask";
import {Keyboard} from "../Keyboard/Keyboard";
import {ac, cl, co} from "../../pages/RegistrationPage/buttonsMap";
import {requestValidNumber} from "./requestValidNumber";
import "./RegistrationForm.scss";

interface RegistrationFormProps {
    setFinishedRegistering: (value: boolean) => void;
    setSetFocus: (btnKey: string, setFocus: () => void) => void;
    setFocusFnsRef:MutableRefObject<{ [key: string]: () => void; }>;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({setFinishedRegistering, setSetFocus, setFocusFnsRef}) => {
    const [phoneValue, setPhoneValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [validNumber, setValidNumber] = useState(true);
    const confirmBtnRef = useRef<HTMLButtonElement | null>(null);
    const acceptInputRef = useRef<HTMLInputElement | null>(null);

    const isValidForm = phoneValue.length === 10 && isChecked;

    useEffect(() => {
        setSetFocus(ac, () => acceptInputRef.current?.focus());
        setSetFocus(co, () => confirmBtnRef.current?.focus());
    }, []);

    const onKeyPress = (value: string) => {
        if (value === 'clear' || value === 'Backspace') {
            setPhoneValue((prevInput) => prevInput.slice(0, -1));
        } else {
            phoneValue.length < 10 &&
            setPhoneValue((prevInput) => prevInput + value);
        }
        setValidNumber(true);
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        if (!isValidForm) return;

        // const response = await requestValidNumber(phoneValue);
        //
        // setValidNumber(response.valid)
        // setFinishedRegistering(response.valid);
        //
        // if(!response.valid) {
        //     setFocusFnsRef.current[cl]();
        // }
        // console.log(response)
        setFocusFnsRef.current[cl]();
        setValidNumber(false)
        setFinishedRegistering(false);


    }

    return (
        <div className='registrationForm-container'>
            <p className='registrationForm-title'>Введите ваш номер мобильного телефона</p>
            <form className='registrationForm-form' onSubmit={handleSubmit}>
                <label className='form-input-container'>
                    <InputMask
                        className={validNumber ? 'form-input' : 'form-input form-input-error'}
                        mask='+7(999)999-99-99'
                        alwaysShowMask={true}
                        value={phoneValue}
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
                    {!validNumber
                        ?<p className="form-check-error">Неверно введён номер</p>
                        :<>
                            <input
                                data-key={ac}
                                ref={acceptInputRef}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                className="form-check-input"
                                type="radio"
                            />
                            <label className="form-check-label">
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
                    Подтвердить номер
                </button>
            </form>
        </div>
    )
}
export {RegistrationForm};