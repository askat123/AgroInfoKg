import React from 'react';
import { AiOutlineInstagram,AiOutlineFacebook } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./index.scss"

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <h1>AGROINFO.KG</h1>
                    <p>АгроИнфо.КГ— информационная поддержка сельского хозяйства и пищевой промышленностю</p>
                    <div className='footer--line'></div>
                    <Link><AiOutlineInstagram/></Link>
                    <Link><RiTwitterLine/></Link>
                    <Link><AiOutlineFacebook/></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;