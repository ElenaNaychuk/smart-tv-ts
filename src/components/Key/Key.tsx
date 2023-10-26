import React, {useEffect, useRef} from "react";
import "./Key.scss";

interface KeyProps {
    value: string;
    onKeyPress: (value: string) => void;
    isWide: boolean;
    setSetFocus: (setFocus: () => void) => void;
}
const Key: React.FC<KeyProps> = ({value, isWide, onKeyPress, setSetFocus}) => {
    const keyRef = useRef<HTMLButtonElement | null>(null);
    const keyClass = `key ${isWide ? 'key-backspace' : ''}`;

    useEffect(() => {
        setSetFocus(() => keyRef?.current?.focus());
    }, [])

    return (
        <button
            data-key={value}
            ref={keyRef}
            className={keyClass}
            value={value}
            onClick={event => onKeyPress?.((event.target as HTMLButtonElement).value)}
        >
            {value === 'clear' ? 'Стереть': value}
        </button>
    )
}
export {Key};
