import "./search-box.styles.css";
import { ChangeEvent } from "react";

type SearchBoxProps = {
    className: string;
    type: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
    className,
    type,
    placeholder,
    onChangeHandler,
}: SearchBoxProps) => {
    return (
        <input
            className={`search-box ${className}`}
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
};

export default SearchBox;
