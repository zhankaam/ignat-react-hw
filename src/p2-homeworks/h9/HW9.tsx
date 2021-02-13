import React from "react";
import Clock from "./Clock";
import s from "./HW9.module.css"

function HW9() {
    return (
        <div className={s.wrapper}>
            <hr/>
            <h3 className={s.title}>homeworks 9</h3>

            {/*should work (должно работать)*/}
           <div className={s.container}>
               <Clock/>
           </div>

           {/* <hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
           {/* <hr/>*/}
        </div>
    );
}

export default HW9;
