import React, {useEffect, useRef} from "react";
import {Key} from "../Key/Key";
import "./Keyboard.scss";

interface KeyboardProps {
    onKeyPress: (value: string) => void;
    selectedKey?: { value: string; index: number };
}

const Keyboard:React.FC = () => {
    const keyRef = useRef<HTMLButtonElement | null>(null);
    const keys = ['1', '2', '3','4', '5', '6','7', '8', '9', 'Стереть', '0'];

    useEffect(() => {
        if (keyRef.current && keyRef.current.value === '5') {
            keyRef.current.focus();
        }
    }, []);

    return(
        <div className='keyboard-container'>
            {keys.map((item, index) =>
                <Key
                    key={Date.now()+index}
                    value={item}
                    // ref={keyRef}
                    // onClick={onKeyPress}
                    isWide={item === 'Стереть'}
                    // isSelected={selectedKey && selectedKey.value === item}
                />
            )}
        </div>
    )
}
export {Keyboard}