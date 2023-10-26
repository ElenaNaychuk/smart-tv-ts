import React, {useEffect, useRef} from "react";
import qrCode from "../../assets/images/QR-code-icon.svg";
import "./Banner.scss"
import {useNavigate} from "react-router-dom";

const Banner:React.FC= () => {
    const bannerRef = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();

    useEffect(()=>{
        bannerRef?.current?.focus();
    },[])

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/registration');
    }

    return(
        <div className='banner-container'>
            <form className='banner-form' onSubmit={(e)=>handleClick(e)}>
                <p className='banner-form-title'>
                    ИСПОЛНИТЕ МЕЧТУ ВАШЕГО <br/>
                    МАЛЫША! <br/>
                    ПОДАРИТЕ ЕМУ СОБАКУ!
                </p>
                <img className='banner-form-QR-code' src={qrCode} alt='QR-code'/>
                <p className='banner-form-text'>
                    Сканируйте QR-код
                    или нажмите ОК
                </p>
                <button ref={bannerRef}
                    className='banner-form-button'
                    type='submit'
                >OK</button>
            </form>
        </div>
    )
}
export {Banner};