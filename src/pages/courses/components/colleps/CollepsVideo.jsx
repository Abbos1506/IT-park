import React from "react";
import { collepsData } from "../../../../utils/pageOneData";

const CollepsVideo = () => {
  return (
    <div className="colleps-video">
      <div className="colleps-video__cards">
        {collepsData.map((item) => (
          <div className="colleps__card" key={item.id}>
            <div className="colleps__card__icon">
              <i>{item.icon}</i>
            </div>
            <div className="colleps__card__title">
              <h2>{item.title}</h2>
            </div>
            <div className="colleps__card__time">
              <p>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollepsVideo;
