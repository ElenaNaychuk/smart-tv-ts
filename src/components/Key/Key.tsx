import React, {useEffect, useRef, useState} from "react";
import "./Key.scss";

interface KeyProps {
    value: string;
    onClick?: (value: string) => void;
    isWide?: boolean;
    setPhoneValue: (value: string) => void;
    phoneValue:string;
}

const Key:React.FC<KeyProps> = ({ value, isWide, setPhoneValue, phoneValue}) => {
    const keyRef = useRef<HTMLButtonElement | null>(null);
    const keyClass = `key ${isWide ? 'key-backspace' : ''}`;

    useEffect(() => {
        if(!keyRef.current) return;
        if (keyRef.current.value === '5') {
            keyRef.current.focus();
        }
    }, []);

    return(
        <button
            ref={keyRef}
            className={keyClass}
            value={value}
            onClick={(e)=>{
                e.preventDefault();
                setPhoneValue(phoneValue+value);
            }}
        >
            {value}
        </button>
    )
}
export {Key};