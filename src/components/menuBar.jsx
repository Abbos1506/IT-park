import React from "react";
import {
  SettingOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MenuBar = () => {
  return (
    <div className="menuBar">
      <div className="menuBar__icons">
        <i>
          <MessageOutlined />
        </i>
        <i>
          <BellOutlined />
        </i>
        <i>
          <SettingOutlined />
        </i>
        <button className="menuBar__profil">
          <UserOutlined />
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
