import React, {FormEvent, useEffect, useRef} from "react";
import "./Key.scss";
import {cl} from "../../pages/RegistrationPage/buttonsMap";

interface KeyProps {
    value: string;
    onClick: (e:FormEvent) => void;
    isWide: boolean;
    setSetFocus: (setFocus: () => void) => void;
}

const Key: React.FC<KeyProps> = ({value, isWide, onClick, setSetFocus}) => {
    const keyRef = useRef<HTMLButtonElement | null>(null);
    const keyClass = `key ${isWide ? 'key-backspace' : ''}`;

    useEffect(() => {
        setSetFocus(() => keyRef?.current?.focus());
    }, [])

    return (
        <button
            data-key={value === 'Стереть' ? cl : value}
            ref={keyRef}
            className={keyClass}
            value={value}
            onClick={onClick}
        >
            {value}
        </button>
    )
}
export {Key};
