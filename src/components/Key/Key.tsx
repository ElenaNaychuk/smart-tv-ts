import React, {useEffect, useRef} from "react";
import "./Key.scss";

interface KeyProps {
    value: string;
    onKeyPress: (value: string) => void;
    isWide?: boolean;
    activeKey: string;
}

const Key: React.FC<KeyProps> = ({value, isWide, onKeyPress, activeKey}) => {
    const keyRef = useRef<HTMLButtonElement | null>(null);
    const keyClass = `key ${isWide ? 'key-backspace' : ''}`;

    useEffect(()=>{
        if(value === activeKey) {
            keyRef?.current?.focus();
        }
    }, [activeKey])

    return (
        <button
            ref={keyRef}
            className={keyClass}
            value={value}
            onClick={event => onKeyPress?.((event.target as HTMLButtonElement).value)}
        >
            {value}
        </button>
    )
}
export {Key};