import React, { useEffect, useState } from "react";
import '../assets/css/Container.css';
import dataJson from '../data.json'
import Statistic from "./Statistic";
import RightStatistic from "./RightStatistic";

function Container() {
    const [description, setDescription] = useState(dataJson[0].description.text_description);
    const [text, setText] = useState(dataJson[0].text.text_description);
    useEffect(() => {
        const tags = dataJson[0].description.tags;
        const replaceTags = () => {
            let updatedDescription = description;
            let updatedText = text;
            tags.forEach(tag => {
                const regex = new RegExp(tag.text_tag, 'g');
                updatedDescription = updatedDescription.replace(regex, match => (
                    `<span class="main-tag" style="background-color: ${tag.color_text_tag};">${match}<span class="type-tag" style="background-color: ${tag.color_of_tag}; color: white;">${tag.type_tag}</span></span>`
                ));
                updatedText = updatedText.replace(regex, match => (
                    `<span class="main-tag" style="background-color: ${tag.color_text_tag};">${match}<span class="type-tag" style="background-color: ${tag.color_of_tag}; color: white;">${tag.type_tag}</span></span>`
                ));
            });
            if (description !== updatedDescription) {
                setDescription(updatedDescription);
            }
            if (text !== updatedText) {
                setText(updatedText);
            }
        };
        replaceTags();
    }, []);
    const tags = dataJson[0].tags;

    return (
        <div className="container">
            <div className="head-nav">
                <div className="nav-title-items">
                    <div className="title">{dataJson[0].title}</div>
                    <div className="nav">
                        <span className="nav-text">Главная</span>
                        <span className="nav-item">&rsaquo;</span>
                        <span className="nav-text">Ленты документов</span>
                        <span className="nav-item">&rsaquo;</span>
                        <span className="nav-text">ДСКЦ/Twitters</span>
                        <span className="nav-item">&rsaquo;</span>
                        <span className="nav-text" style={{ color: "#929EAB" }}>Великобритания сделала дерзкое заявление в адрес России</span>
                    </div>
                </div>
                <div className="head-btn">
                    <div className="head-btn-img"></div>
                    <div className="head-btn-text">Разметить</div>
                </div>
            </div>
            <div className="content">
                <div className="up-block">
                    <div className="info-flex">
                        <div className="info-img" style={{ backgroundImage: `url(${dataJson[0].img})` }}></div>
                        <div className="info-content">
                            <Statistic dataJson={dataJson} />
                        </div>
                    </div>
                    <div className="right-statistic">
                        <RightStatistic dataJson={dataJson} />
                    </div>
                </div>
                <div className="tags">
                    {tags.map((item, index) => (
                        <div className="tag-item" key={index}>{item}</div>
                    ))}
                </div>
                <div className="desc-text-block">
                    <div className="desc-text-menu">
                        <div className="item-desc-text" style={{ borderBottom: '2px solid #4537DF' }}>Содержание</div>
                        <div className="item-desc-text">Дочерние</div>
                        <div className="item-desc-text">Параметры</div>
                    </div>
                    <div className="scroll-block">
                        <div className="desc-block">
                            <div className="desc-title">ОПИСАНИЕ</div>
                            <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                        <div className="text-block">
                            <div className="desc-title">ТЕКСТ</div>
                            <div className="text-content" dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="btn-in-favourite buttons-item">
                            <div className="btn-in-favourite-img"></div>
                            <div className="btn-in-favourite-text">В избранное</div>
                        </div>
                        <div className="btn-in-trash buttons-item">
                            <div className="btn-in-trash-img"></div>
                            <div className="btn-in-trash-text">В корзину</div>
                        </div>
                        <div className="btn-summ buttons-item">Суммаризировать</div>
                        <div className="btn-translate buttons-item">Перевести</div>
                        <div className="btn-settings buttons-item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;

