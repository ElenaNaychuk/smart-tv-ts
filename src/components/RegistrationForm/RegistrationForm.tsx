import React, {useState} from "react";
import InputMask from "react-input-mask";
import "./RegistrationForm.scss";
import {Keyboard} from "../Keyboard/Keyboard";

const RegistrationForm:React.FC = () => {
    const [phoneValue, setPhoneValue] = useState('+7');

    console.log(phoneValue)

    return(
        <div className='registrationForm-container'>
            <p className='registrationForm-title'>Введите ваш номер мобильного телефона</p>
            <form className='registrationForm-form'>
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
                    <Keyboard setPhoneValue={setPhoneValue} phoneValue={phoneValue}/>
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