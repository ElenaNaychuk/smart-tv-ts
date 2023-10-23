import React from "react";
import qrCode from "../../assets/images/QR-code-icon.svg";
import "./RegistrationPage.scss";
import {RegistrationForm} from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage:React.FC = () => {
    return(
        <div className='registrationPage-container'>
            <div className='registrationPage-form'>
                <RegistrationForm/>
            </div>
            <div>
                <button>&#10006;</button>
                <div>
                    <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                    <img src={qrCode} alt='QR-code'/>
                </div>
            </div>
        </div>
    )
}
export {RegistrationPage};