import React, { useState, useEffect, useRef } from "react";
import "../assets/css/Header.css";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuBlock = useRef()
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        if (isMenuOpen) {
            menuBlock.current.style.display = "block";
            setTimeout(() => {
                menuBlock.current.style.opacity = 1;
                menuBlock.current.style.transform = "translateY(0)";
            }, 10);
        } else {
            menuBlock.current.style.opacity = 0;
            menuBlock.current.style.transform = "translateY(-10px)";
            setTimeout(() => {
                menuBlock.current.style.display = "none";
            }, 300);
        }
    }, [isMenuOpen]);

    return (
        <div className="header">
            <div onClick={toggleMenu} className="menu-adaptive">
                <div ref={menuBlock} className="opened-block">
                    <div className="opened-item">Главная</div>
                    <div className="opened-item">Ленты документов</div>
                    <div className="opened-item">База знаний</div>
                    <div className="opened-item">Формы сбора</div>
                    <div className="opened-item">Отчёты</div>
                    <div className="opened-item">Аналитика</div>
                </div>
            </div>
            <div className="header-items">
                <div className="translate header-btn img"></div>
                <div className="notification header-btn img"></div>
                <div className="friends header-btn img"></div>
                <div className="settings header-btn img"></div>
                <div className="avatar header-btn img"></div>
            </div>
        </div>
    );
}

export default Header;