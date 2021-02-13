import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from "./HW10.module.css"

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector((state:AppStoreType) => state.loading.loading);
    const dispatch = useDispatch();

    const setLoading = () => {
         dispatch(loadingAC(true))
         setTimeout(() => {
             dispatch(loadingAC(false))
         },5000)
        console.log("loading...");
    };

    return (
        <div className={s.container}>
            <hr/>
            <h4 className={s.title}>homeworks 10</h4>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.loading}>
                        <img src="https://fairylifeblog.files.wordpress.com/2016/02/loading.gif" alt="loading"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

           {/* <hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
           {/* <hr/>*/}
        </div>
    );
}

export default HW10;
