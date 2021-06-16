import React from 'react';
import logoTSPKNEW from '../../../img/ТСПК-logo.png'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={s.nav}>

            <div className={s.theme}>
            </div>
            <div className={s.logo}>
                <NavLink to="/"><img src={logoTSPKNEW} alt="Логотип ЦОПП"/></NavLink>
            </div>
            <div className="none">
            {/* this for j-s spbtwn */}
            </div>
        </div>
    );
};

export default Header;