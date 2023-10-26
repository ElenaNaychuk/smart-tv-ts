import React, {FormEvent, useEffect, useMemo} from "react";
import {Key} from "../Key/Key";
import {_0, _1, _2, _3, _4, _5, _6, _7, _8, _9, cl} from "../../pages/RegistrationPage/buttonsMap";
import "./Keyboard.scss";

interface KeyboardProps {
    onKeyPress: (value: string) => void;
    setSetFocus: (btnKey: string, setFocus: () => void) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({onKeyPress, setSetFocus}) => {
    const keys = useMemo(() => {
        return [_1, _2, _3, _4, _5, _6, _7, _8, _9, cl, _0];
    }, []);

    const handleKeyDown = (event: KeyboardEvent) => {
        let pressedKey = event.key;
        if (pressedKey === 'Backspace') pressedKey = cl;
        if (keys.includes(pressedKey)) onKeyPress(pressedKey);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className='keyboard-container'>
            {keys.map((item, index) =>
                <Key
                    key={`${index}_${item}`}
                    value={item === 'clear' ? 'Стереть': item}
                    isWide={item === cl}
                    onClick={(e:FormEvent) => {
                        e.preventDefault();
                        onKeyPress(item)
                    }}
                    setSetFocus={(setFocus: () => void) => setSetFocus(item, setFocus)}
                />
            )}
        </div>
    )
}
export {Keyboard}