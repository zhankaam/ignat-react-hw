import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from "./../../HW7.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((value,i) =>
        (<option key={i} className={s.option}>
        {value}
         </option>)) : [];// map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
