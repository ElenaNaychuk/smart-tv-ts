import React, {useEffect, useMemo} from "react";
import {Key} from "../Key/Key";
import {arrowDownHandler, arrowLeftHandler, arrowRightHandler, arrowUpHandler} from "./arrowActions";
import "./Keyboard.scss";

interface KeyboardProps {
    onKeyPress: (value: string) => void;
    activeKey:string;
    setActiveKey: (value: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({onKeyPress, activeKey, setActiveKey}) => {
    const keys = useMemo(() => {
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Стереть', '0'];
    }, []);

    const handleKeyDown = (event: KeyboardEvent) => {
        const pressedKey = event.key;
        if (pressedKey === 'ArrowUp') arrowUpHandler(keys, activeKey, setActiveKey);
        if (pressedKey === 'ArrowDown') arrowDownHandler(keys, activeKey, setActiveKey);
        if (pressedKey === 'ArrowRight') arrowRightHandler(keys, activeKey, setActiveKey);
        if (pressedKey === 'ArrowLeft') arrowLeftHandler(keys, activeKey, setActiveKey);
        if (pressedKey === 'Backspace') onKeyPress(pressedKey);

        if (!isNaN(Number(pressedKey)) && event.code !== 'Space') {
            // setActiveKey(pressedKey);
            console.log(pressedKey)
            onKeyPress(pressedKey);
            return;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeKey]);

    return (
        <div className='keyboard-container'>
            {keys.map((item, index) =>
                <Key
                    key={Date.now() + index}
                    activeKey={activeKey}
                    value={item}
                    isWide={item === 'Стереть'}
                    onKeyPress={onKeyPress}
                />
            )}
        </div>
    )
}
export {Keyboard}