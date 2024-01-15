import React from "react";
import CardIcon1 from "../../../assets/image/CardIcon1.png";
import CardBgImg from "../../../assets/image/CardBgIcon.png";
import CardIcon2 from "../../../assets/image/CardIcon2.png";

const Header = () => {
  return (
    <div className="header__comp">
      <h2 className="header__comp__title">Uyga Vazifa</h2>
      <div className="header__cards">
        <div className="header__card">
          <img className="header__card__bg" src={CardBgImg} alt="" />
          <div className="header__card__image">
            <img src={CardIcon1} alt="" />
          </div>
          <div className="header__card__info">
            <div className="info__title">
              <h2>Web va grafik dizayn</h2>
            </div>
            <p className="info__text">
              O'qituvchi:{" "}
              <span className="info__text__span">Humoyun Madrahimov</span>
            </p>
            <div className="info__btn">
              <button>Darsni ko'rish</button>
            </div>
          </div>
        </div>
        <div className="header__card">
          <img className="header__card__bg" src={CardBgImg} alt="" />
          <div className="header__card__image">
            <img src={CardIcon2} alt="" />
          </div>
          <div className="header__card__info">
            <div className="info__title">
              <h2>SMM</h2>
            </div>
            <p className="info__text">
              O'qituvchi:{" "}
              <span className="info__text__span">Humoyun Madrahimov</span>
            </p>
            <div className="info__btn">
              <button>Darsni ko'rish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
