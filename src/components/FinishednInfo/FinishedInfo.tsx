import React from "react";
import "./FinishedInfo.scss";

const FinishedInfo:React.FC = () => {
    return(
        <div className='finished-info-container'>
            <h2 className='finished-info-title'>ЗАЯВКА ПРИНЯТА</h2>
            <p className='finished-info-text'>Держите телефон под рукой. <br/> Скоро с Вами свяжется наш менеджер. </p>
        </div>
    )
}
export {FinishedInfo};