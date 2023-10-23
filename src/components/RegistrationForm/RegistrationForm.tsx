import React, {useState} from "react";
import InputMask from "react-input-mask";
import "./RegistrationForm.scss";
import {Keyboard} from "../Keyboard/Keyboard";

const RegistrationForm:React.FC = () => {
    const [phoneValue, setPhoneValue] = useState('');

    return(
        <div className='registrationForm-container'>
            <p className='registrationForm-title'>Введите ваш номер мобильного телефона</p>
            <form className='registrationForm-form'>
                <label className='form-input-container'>
                    <InputMask
                        className='form-input'
                        mask='+7(_ _ _)_ _ _-_ _-_ _'
                        alwaysShowMask={true}
                    />
                    и с Вами свяжется наш менеждер для <br/> дальнейшей консультации
                </label>
                <div className='form-buttons'>
                    <Keyboard />
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        // checked={true}
                    />
                    <label className="form-check-label feedback-form__form-radioBtnText">
                        Согласие на обработку персональных данных
                    </label>
                </div>
                <button>Подтвердить номер</button>
            </form>
        </div>
    )
}
export {RegistrationForm};