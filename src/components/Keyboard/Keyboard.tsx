import React, {useEffect, useMemo} from "react";
import {Key} from "../Key/Key";
import "./Keyboard.scss";

interface KeyboardProps {
    onKeyPress: (value: string) => void;
    setSetFocus: (btnKey: string, setFocus: () => void) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({onKeyPress, setSetFocus}) => {
    const keys = useMemo(() => {
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0'];
    }, []);

    const handleKeyDown = (event: KeyboardEvent) => {
        const pressedKey = event.key;
        if (pressedKey === 'Стереть' || pressedKey === 'Backspace') onKeyPress(pressedKey);
        if (!isNaN(Number(pressedKey)) && event.code !== 'Space') {
            onKeyPress(pressedKey);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='keyboard-container'>
            {keys.map((item, index) =>
                <Key
                    key={`${index} - ${item}`}
                    value={item}
                    isWide={item === 'clear'}
                    onKeyPress={onKeyPress}
                    setSetFocus={(setFocus: () => void) => setSetFocus(item, setFocus)}
                />
            )}
        </div>
    )
}
export {Keyboard}