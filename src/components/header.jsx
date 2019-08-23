import React from 'react';
import logo from '../assets/img/logoBlanco.png';
import profile from '../assets/img/user-icon.png';
import '../assets/styles/components/header.scss'

const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="logo"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={profile} alt="profile"/>
                <p>profile</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesion</a></li>
            </ul>
        </div>
    </header>
);

export default Header;