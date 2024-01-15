import React from "react";
import {
  VerticalAlignBottomOutlined,
  VideoCameraOutlined,
  FilePdfOutlined,
  FileZipOutlined,
} from "@ant-design/icons";

const TabTwo = () => {
  return (
    <div className="tab-two">
      <div className="tab-two__title">
        <h2>Mavzuga doir kerakli fayllarni yuklab olish</h2>
        <div className="tab-two__values">
          <p>3 ta fayl</p>
          <i>
            <VerticalAlignBottomOutlined />
          </i>
        </div>
      </div>
      <div className="tab-two__files">
        <div className="files__card">
          <i>
            <VideoCameraOutlined />
          </i>
          <p>Kirish, Video</p>
          <button>Yuklab olish</button>
        </div>
        <div className="files__card">
          <i>
          <FilePdfOutlined />
          </i>
          <p>Kirish, Prezdentatsiya</p>
          <button>Yuklab olish</button>
        </div>
        <div className="files__card">
          <i>
          <FileZipOutlined />
          </i>
          <p>Kirish qo’llanilgan materiallar</p>
          <button>Yuklab olish</button>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
