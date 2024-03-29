 import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {setDarkThemeAC, setRedThemeAC, setSomeThemeAC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes: Array<'dark' | 'red' | 'some'> = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(state => state.theme.themes)
    const dispatch = useDispatch()
    const onChangeCallback = (option: string) => {
        if (option === 'dark') {
            dispatch(setDarkThemeAC("dark"))
        }
        if (option === 'red') {
            dispatch(setRedThemeAC("red"))
        }
        if (option === 'some') {
            dispatch(setSomeThemeAC("some"))
        }
    }

    return (
        <div className={s.wrapper}>

        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect onChangeOption={onChangeCallback} options={themes}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
        </div>
    );
}

export default HW12;
