import React, {useState} from "react";
import {Key} from "../Key/Key";
import "./Keyboard.scss";

interface KeyboardProps {
    onKeyPress?: (value: string) => void;
    setPhoneValue: (value: string) => void;
    phoneValue:string;
}

const Keyboard:React.FC<KeyboardProps> = ({setPhoneValue, phoneValue}) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Стереть', '0'];

    return(
        <div className='keyboard-container'>
            {keys.map((item, index) =>
                <Key
                    key={Date.now()+index}
                    value={item}
                    isWide={item === 'Стереть'}
                    setPhoneValue={setPhoneValue}
                    phoneValue={phoneValue}
                />
            )}
        </div>
    )
}
export {Keyboard}