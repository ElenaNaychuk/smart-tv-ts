import React, {useEffect, useRef, useState} from "react";
import qrCode from "../../assets/images/QR-code-icon.svg";
import {RegistrationForm} from "../../components/RegistrationForm/RegistrationForm";
import {useNavigate} from "react-router-dom";
import {FinishedInfo} from "../../components/FinishednInfo/FinishedInfo";
import "./RegistrationPage.scss";

const RegistrationPage:React.FC = () => {
    const navigate = useNavigate();
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const [finishedRegistering, setFinishedRegistering] = useState(false);

    useEffect(() => {
        if(btnRef.current && finishedRegistering) {
            btnRef.current?.focus();
        }
    }, [finishedRegistering]);

    return(
        <div className='registrationPage-container'>
            <div className='registrationPage-form'>
                {!finishedRegistering
                    ?<RegistrationForm setFinishedRegistering={setFinishedRegistering}/>
                    :<FinishedInfo/>
                }
            </div>
            <div className='registrationPage-info-container'>
                <button
                    className='registrationPage-closeBtn'
                    onClick={()=> navigate('/')}
                    ref={btnRef}
                >
                    &#10006;
                </button>
                <div className='registrationPage-QR-code'>
                    <p className='registrationPage-text'>СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                    <img className='registrationPage-img' src={qrCode} alt='QR-code'/>
                </div>
            </div>
        </div>
    )
}
export {RegistrationPage};