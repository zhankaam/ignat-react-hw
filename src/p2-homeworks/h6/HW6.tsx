import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        const restoreValue = restoreState("editable-span-value", value)
         setValue(restoreValue);
    };

    return (
        <div className={s.fullBlock}>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={s.input}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <div className={s.buttons}>
                <SuperButton onClick={save} className={s.button}>save</SuperButton>
                <SuperButton onClick={restore} className={s.button}>restore</SuperButton>
            </div>

          {/*  <hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
           {/* <hr/>*/}
        </div>
    );
}

export default HW6;
