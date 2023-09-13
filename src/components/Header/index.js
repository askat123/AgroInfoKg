import React from 'react';
import logo from "../../img/image 6.png"
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./index.scss"

const Header = () => {
    return (
        <div>
           <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" />
                        <NavLink>Главная</NavLink>
                        <NavLink>О нас</NavLink>
                        <NavLink>Курсы</NavLink>
                        <NavLink>Покупка/Продажа</NavLink>
                    <button><FaUser/></button>
                    <button><AiOutlineGlobal/></button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Header;