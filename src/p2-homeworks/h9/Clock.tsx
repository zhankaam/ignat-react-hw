import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW9.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
             setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(!show) // show
    };
    const onMouseLeave = () => {
        setShow(show) // close
    };

    const stringTime = date.toLocaleTimeString(); // fix with date
    const stringDate = date.toLocaleDateString(); // fix with date

    return (
        <div>
            <div className={s.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.data}>
                    {stringDate}
                </div>
            )}

                  <SuperButton onClick={start} className={s.btnStart}>start</SuperButton>
                  <SuperButton onClick={stop} className={s.btnStop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
