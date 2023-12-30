import React from "react";
import "../assets/css/Statistic.css"

function Statistic({ dataJson }) {
    const getTrustLevelColor = () => {
        const trustLevel = dataJson[0].level_trust;
        switch (trustLevel) {
            case "Высокий":
                return { backgroundColor: "#189686", color: "white" };
            case "Средний":
                return { backgroundColor: "#FDC500", color: "white" };
            case "Низкий":
                return { backgroundColor: "#FF5630", color: "white" };
        }
    };
    const getAccessLevelColor = () => {
        const levelAccess = dataJson[0].level_access;
        switch (levelAccess) {
            case "Публичный":
                return { color: "#189686", backgroundColor: "#18968629" }
            case "Приватный":
                return { backgroundColor: "#FF5630", color: "white" };
        }
    };
    const getReaction = () => {
        const reactionStat = dataJson[0].rating.rating_name;
        switch (reactionStat) {
            case "bad":
                return { backgroundImage: `url(${dataJson[0].rating.rating_img})` }
        }
    };

    return (
        <>
            <div className="short-statistic">
                <div className="alert-statistic">
                    <div className="alert-img"></div>
                    <div className="alert-counter">{dataJson[0].reports}</div>
                </div>
                <div className="reaction-statistic" style={getReaction()}></div>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title">Родительский документ:</span>
                <span className="statistic-item-elem statistic-item-elem-parent">{dataJson[0].is_main_document}</span>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title" style={{ paddingTop: "4px" }}>Уровень доступа:</span>
                <span className="statistic-item-elem statistic-item-access" style={getAccessLevelColor()}>{dataJson[0].level_access}</span>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title" style={{ paddingTop: "6px" }}>Уровень доверия:</span>
                <span className="statistic-item-elem statistic-item-trust" style={getTrustLevelColor()}>{dataJson[0].level_trust}</span>
            </div>
            <div className="statistic-item statistic-item-url">
                <span className="statistic-item-title">URL оригинала:</span>
                <div className="statistic-item-elem url-item-elem">
                    <a href={dataJson[0].url_original}>
                        <div className="statistic-url-icon"></div>
                    </a>
                    <a href={dataJson[0].url_original} style={{ textDecoration: 'none', color: '#4537DF', marginLeft: '5px' }}>
                        {dataJson[0].url_original}
                    </a>
                </div>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title">Дата публикации:</span>
                <span className="statistic-item-elem statistic-item-date-published">{dataJson[0].date_published}</span>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title">Дата загрузки:</span>
                <span className="statistic-item-elem statistic-item-date-upload">{dataJson[0].date_download}</span>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title" style={{ paddingTop: "3px" }}>Автор:</span>
                <div className="statistic-item-elem author-item-elem">
                    <div className="statistic-avatar" style={{ backgroundImage: `url(${dataJson[0].author.author_avatar})` }}></div>
                    <span className="statistic-item-elem" style={{ paddingTop: "3px" }}>{dataJson[0].author.author_name}</span>
                </div>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title">Источник:</span>
                <span className="statistic-item-elem">
                    <a href={dataJson[0].source} style={{ textDecoration: 'none', color: '#4537DF' }}>
                        {dataJson[0].source}
                    </a>
                </span>
            </div>
            <div className="statistic-item">
                <span className="statistic-item-title">Платформа:</span>
                <span className="statistic-item-elem">{dataJson[0].platform}</span>
            </div>
        </>
    );
}

export default Statistic;