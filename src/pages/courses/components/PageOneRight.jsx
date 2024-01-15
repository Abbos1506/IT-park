import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import CollepsComp from "./colleps/CollepsComp";

const PageOneRight = () => {
  return (
    <div className="pageone-right">
      <div className="pageone-right__card">
        <div className="pageone-right__card__title">
          <h2>Jarayon</h2>
          <i>
            <MoreOutlined />
          </i>
        </div>
        <div className="pageone-right__card__progress">
          <Progress percent={20} size={[300, 17]} />
        </div>
        <div className="pageone-right__card__text">
          <p>Web va grafik dizayn</p>
          <span>10/110</span>
        </div>
      </div>
      <div className="colleps-comp">
        <CollepsComp />
      </div>
    </div>
  );
};

export default PageOneRight;
