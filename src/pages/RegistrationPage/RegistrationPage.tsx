import React, {useEffect, useRef, useState} from "react";
import qrCode from "../../assets/images/QR-code-icon.svg";
import {RegistrationForm} from "../../components/RegistrationForm/RegistrationForm";
import {useNavigate} from "react-router-dom";
import {FinishedInfo} from "../../components/FinishednInfo/FinishedInfo";
import {_5, buttonsMap, x_} from "./buttonsMap";
import {
    arrowDownHandler,
    arrowLeftHandler,
    arrowRightHandler,
    arrowUpHandler
} from "../../components/Keyboard/arrowActions";
import "./RegistrationPage.scss";

const RegistrationPage: React.FC = () => {
    const navigate = useNavigate();
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const [finishedRegistering, setFinishedRegistering] = useState(false);
    const setFocusFnsRef = useRef<{ [key: string]: () => void }>({});

    const handleKeyDown = (event: KeyboardEvent) => {
        const pressedKey = event.key;
        if (pressedKey === 'ArrowUp') {
            const nextKey = arrowUpHandler(buttonsMap);
            setFocusFnsRef.current[nextKey]();
        }
        if (pressedKey === 'ArrowDown') {
            const nextKey = arrowDownHandler(buttonsMap);
            setFocusFnsRef.current[nextKey]();
        }
        if (pressedKey === 'ArrowRight') {
            const nextKey = arrowRightHandler(buttonsMap);
            setFocusFnsRef.current[nextKey]();
        }
        if (pressedKey === 'ArrowLeft') {
            const nextKey = arrowLeftHandler(buttonsMap);
            setFocusFnsRef.current[nextKey]();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        setFocusFnsRef.current[x_] = ()=>closeBtnRef.current?.focus();
        setFocusFnsRef.current[_5]();
    }, []);

    useEffect(() => {
        if (closeBtnRef.current && finishedRegistering) {
            closeBtnRef.current?.focus();
        }
    }, [finishedRegistering]);

    return (
        <div className='registrationPage-container'>
            <div className='registrationPage-form'>
                {!finishedRegistering
                    ? <RegistrationForm
                        setFinishedRegistering={setFinishedRegistering}
                        setSetFocus={(key: string, setFocus: () => void) => setFocusFnsRef.current[key] = setFocus}
                    />
                    : <FinishedInfo/>
                }
            </div>
            <div className='registrationPage-info-container'>
                <button
                    data-key={x_}
                    className='registrationPage-closeBtn'
                    onClick={() => navigate('/')}
                    ref={closeBtnRef}
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