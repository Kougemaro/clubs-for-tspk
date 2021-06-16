import React from 'react';
import logoCopp from '../../../img/logoCopp.png'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h3>Наши портнеры</h3>
            <div className={s.partners}>
                <img src={logoCopp} alt="ЦОПП"/>
            </div>
        </div>
    );
};

export default Footer;
