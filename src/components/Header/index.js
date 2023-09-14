import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import logotext from "../../img/logtext.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./index.scss";
import 'aos/dist/aos.css'; // Импортируйте CSS стили AOS
import AOS from 'aos';

const Header = () => {
    useEffect(() => {
        // Инициализация AOS
        AOS.init();
      }, []);
  return (
    <div>
      <div id="header" >
        <div className="container">
          <div className="header">
            <div
              className="header--logo"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="" style={{ width: "45%" }} data-aos="fade-down"/>
              <img src={logotext} alt="" style={{ width: "75%" }} data-aos="fade-down"/>
            </div>
            <NavLink data-aos="fade-down">Главная</NavLink>
            <NavLink data-aos="fade-down">О нас</NavLink>
            <NavLink data-aos="fade-down">Курсы</NavLink>
            <NavLink data-aos="fade-down">Покупка/Продажа</NavLink>
            <button data-aos="fade-down">
              <AiOutlineGlobal />
            </button>
            <button data-aos="fade-down">
              <FaUser />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
