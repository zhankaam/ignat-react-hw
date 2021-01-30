import React, {useState} from "react";
import s from './HW5.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from './Routes'

function Header() {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const toggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className={s.container}>
            <div className={s.header} onClick={toggle}>&#9776;</div>
            <div className={`${s.containerMenu} ${activeMenu && s.activeMenu}`}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active} className={s.menuLinks}> PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active} className={s.menuLinks}> Junior + </NavLink>
            </div>

             {/*add NavLinks*/}

        </div>
    );
}

export default Header;
