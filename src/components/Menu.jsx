import React from "react";
import MenuItem from "./MenuItem";
import '../assets/css/Menu.css';

function Menu() {
    const menuItems = [
        { id: 1, imgClass: "main", menuText: "Главная" },
        { id: 2, imgClass: "all-documents", menuText: "Ленты документов" },
        { id: 3, imgClass: "knowledge-base", menuText: "База знаний" },
        { id: 4, imgClass: "forms", menuText: "Формы сбора" },
        { id: 5, imgClass: "reports", menuText: "Отчёты" },
        { id: 6, imgClass: "analytic", menuText: "Аналитика" },
    ];
    return (
        <div className="menu">
            <div className="menu-header">
                <div className="menu-logo img"></div>
                <div className="menu-header-text">МЕНЮ</div>
            </div>
            <div className="btn-open-menu img"></div>
            <div className="menu-flex">
                {menuItems.map((item, index) => (
                    <MenuItem key={item.id} imgClass={item.imgClass} menuText={item.menuText} />
                ))}
            </div>
        </div>
    );
}


export default Menu;