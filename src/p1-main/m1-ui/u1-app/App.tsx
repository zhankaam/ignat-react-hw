import React from "react";
import s from "./App.module.css";
import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
    return (
        <div className={s.App}>
            <h3 className={s.title}>React homeworks:</h3>
            {<HW5/>}
        </div>
    );
}

export default App;
