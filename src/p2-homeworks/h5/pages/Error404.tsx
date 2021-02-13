import React from "react";
import s from './Error.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h2 className={s.fonts}>Oops! Page not found!</h2>
                <h1 className={s.title}>404</h1>
                <p>We can't find the page you're looking for.</p>
                <a href="#" className={s.style}>Go back home</a>
            </div>
        </div>
    );
}

export default Error404;
