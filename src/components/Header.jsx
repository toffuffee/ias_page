import React, { useState, useEffect } from "react";
import "../assets/css/Header.css";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const menuBlock = document.querySelector(".opened-block");
        if (isMenuOpen) {
            menuBlock.style.display = "block";
            setTimeout(() => {
                menuBlock.style.opacity = 1;
                menuBlock.style.transform = "translateY(0)";
            }, 10);
        } else {
            menuBlock.style.opacity = 0;
            menuBlock.style.transform = "translateY(-10px)";
            setTimeout(() => {
                menuBlock.style.display = "none";
            }, 300);
        }
    }, [isMenuOpen]);

    return (
        <div className="header">
            <div onClick={toggleMenu} className="menu-adaptive">
                <div className="opened-block">
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