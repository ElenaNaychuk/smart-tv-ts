import React, {FormEvent, useEffect, useRef, useState} from "react";
import InputMask from "react-input-mask";
import {Keyboard} from "../Keyboard/Keyboard";
import {ac, co} from "../../pages/RegistrationPage/buttonsMap";
import "./RegistrationForm.scss";

interface RegistrationFormProps {
    setFinishedRegistering: (value: boolean) => void;
    setSetFocus: (btnKey: string, setFocus: () => void) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({setFinishedRegistering, setSetFocus}) => {
    const [phoneValue, setPhoneValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const confirmBtnRef = useRef<HTMLButtonElement | null>(null);
    const acceptInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setSetFocus(ac, () => acceptInputRef.current?.focus());
        setSetFocus(co, () => confirmBtnRef.current?.focus());
    }, []);

    const validForm = phoneValue.length === 10 && isChecked;

    const onKeyPress = (value: string) => {
        if (value === 'Стереть' || value === 'Backspace') {
            setPhoneValue((prevInput) => prevInput.slice(0, -1));
        } else {
            phoneValue.length < 10 &&
            setPhoneValue((prevInput) => prevInput + value);
        }
    }

    useEffect(() => {
        if (confirmBtnRef.current && validForm) {
            confirmBtnRef.current?.focus();
        }
    }, [validForm]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validForm) return;
        setFinishedRegistering(true);
    }

    return (
        <div className='registrationForm-container'>
            <p className='registrationForm-title'>Введите ваш номер мобильного телефона</p>
            <form className='registrationForm-form' onSubmit={handleSubmit}>
                <label className='form-input-container'>
                    <InputMask
                        className='form-input'
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
                </div>
                <button
                    data-key={co}
                    className="form-button"
                    disabled={!validForm}
                    ref={confirmBtnRef}
                >
                    Подтвердить номер
                </button>
            </form>
        </div>
    )
}
export {RegistrationForm};