import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeCallback?: (newValue: number | Array<number>) => void
    value: Array<number>
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeCallback, value
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
   let onChangeRange = (event: ChangeEvent<{}>, newValue: number | Array<number>) => {
       onChangeCallback && onChangeCallback(newValue)
   }

    return (
        <div>
            <Slider
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default SuperDoubleRange;
