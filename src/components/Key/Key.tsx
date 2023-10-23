import React from "react";
import "./Key.scss";

interface KeyProps {
    value: string;
    // onClick: (value: string) => void;
    isWide?: boolean;
    isSelected?: boolean;
    ref?: HTMLButtonElement | null;
}

const Key:React.FC<KeyProps> = ({ value, isWide, ref}) => {
    const keyClass = `key ${isWide ? 'key-backspace' : ''}`;
    return(
        <button
            className={keyClass}
            // onClick={() => onClick(value)}
        >
            {value}
        </button>
    )
}
export {Key};