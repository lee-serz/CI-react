import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="main-page-wrapper">
           <Header/>
            <div className="main-page-content">
                <div className="main-page-content__text">Создавайте свой онлайн-курс <br /> на конструкторе Всем Бобра </div>
                <div className="main-pege-content__btn">Создать курс</div>
            </div>
        </div>
    );
};

export default MainPage;