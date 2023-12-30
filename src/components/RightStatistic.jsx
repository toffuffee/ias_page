import React from "react";
import "../assets/css/RightStatistic.css"

function RightStatistic({ dataJson }) {
    return (
        <>
            <div className="right-statistic-block">
                <div className="communications-title">СВЯЗИ</div>
                <div className="statistic-info">
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">Объекты:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].communications.objects}</span>
                    </div>
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">События:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].communications.events}</span>
                    </div>
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">Факты:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].communications.facts}</span>
                    </div>
                </div>
            </div>
            <div className="right-statistic-block">
                <div className="communications-title">АНАЛИТИКА</div>
                <div className="statistic-info">
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">Вовлеченность:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].analytic.engagement}</span>
                    </div>
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">Лояльность:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].analytic.loyalty}</span>
                    </div>
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">Охват:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].analytic.coverage}</span>
                    </div>
                </div>
            </div>
            <div className="right-statistic-block">
                <div className="communications-title">СВЯЗИ</div>
                <div className="statistic-info">
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">Объекты:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].communications.objects}</span>
                    </div>
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">События:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].communications.events}</span>
                    </div>
                    <div className="statistic-info-elem">
                        <span className="statistic-info-elem-title">Факты:<sup>?</sup></span>
                        <span className="statistic-info-elem-count">{dataJson[0].communications.facts}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightStatistic;