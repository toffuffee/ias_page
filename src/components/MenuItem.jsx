import React from "react";

function MenuItem({ imgClass, menuText }) {
    return (
        <div className="menu-btn">
            <div className={`img ${imgClass}`}></div>
            <div className="menu-text">{menuText}</div>
        </div>
    );
}

export default MenuItem;