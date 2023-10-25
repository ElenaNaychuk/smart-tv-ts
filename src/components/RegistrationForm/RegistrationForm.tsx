import React, {FormEvent, useCallback, useEffect, useMemo, useRef, useState} from "react";
import InputMask from "react-input-mask";
import {Keyboard} from "../Keyboard/Keyboard";
import "./RegistrationForm.scss";

interface RegistrationFormProps {
    setFinishedRegistering: (value:boolean) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({setFinishedRegistering}) => {
    const [phoneValue, setPhoneValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [activeKey, setActiveKey] = useState('5');
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const validForm = phoneValue.length === 10 && isChecked;

    useEffect(() => {
        if (btnRef.current && validForm) {
            btnRef.current?.focus();
        }
    }, [validForm]);

    const onKeyPress = (value: string) => {
        if (value === 'Стереть' || value === 'Backspace') {
            setPhoneValue((prevInput) => prevInput.slice(0, -1));
        } else {
            phoneValue.length < 10 &&
            setPhoneValue((prevInput) => prevInput + value);
        }
        setActiveKey(value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!validForm) return;
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
                        activeKey={activeKey}
                        setActiveKey={setActiveKey}
                    />
                </div>
                <div className="form-check">
                    <input
                        ref={inputRef}
                        onChange={() => setIsChecked(!isChecked)}
                        className="form-check-input"
                        type="radio"
                    />
                    <label className="form-check-label">
                        <span></span>Согласие на обработку персональных данных
                    </label>
                </div>
                <button
                    className="form-button"
                    disabled={!validForm}
                    ref={btnRef}
                >
                    Подтвердить номер
                </button>
            </form>
        </div>
    )
}
export {RegistrationForm};