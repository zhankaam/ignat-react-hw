import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./common/c7-SuperRange/SuperRange.module.css";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (value: number) => {
        setValue1(value)
    }
    const onChangeCallback = (newValue: number | Array<number>) => {
        if(typeof newValue === "object"){
            setValue1(newValue[0])
            setValue2(newValue[1])}
    }

    return (
        <div className={s.wrapper}>
            <hr/>
            <h3>homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeCallback={onChangeCallback}
                    value={[value1,value2]}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

          {/*  <hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
           {/* <hr/>*/}
        </div>
    );
}

export default HW11;
