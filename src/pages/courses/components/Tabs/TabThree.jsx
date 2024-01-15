import React from "react";
import { FileZipOutlined } from "@ant-design/icons"

const TabThree = () => {
  return (
    <div className="tab-three">
      <div className="tab-three__text">
        <p>
          1.Dribbble.com saytida dizaynlarni kuzatish, yaxshi dizayn va yomon
          dizayn farqlarini o’rganish dizaynlar orasidan o’zingizda yoqqan 3ta
          dizaynni tanlash va izohlab berish.
        </p>
      </div>
      <div className="tab-three__card">
        <i>
          <FileZipOutlined />
        </i>
        <p>uyga vazifa uchun materiallar</p>
        <button>Yuklab olish</button>
      </div>
    </div>
  );
};

export default TabThree;
