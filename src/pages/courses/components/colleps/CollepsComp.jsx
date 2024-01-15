import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse, theme } from "antd";
import CollepsVideo from "./CollepsVideo";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Video Kurslar",
    children: <CollepsVideo/>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "Audio",
    children: <CollepsVideo/>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "Modul",
    children: <CollepsVideo/>,
    style: panelStyle,
  },
  {
    key: "4",
    label: "Viktorina",
    children: <CollepsVideo/>,
    style: panelStyle,
  },
];
const CollepsComp = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: "25px",
    background: "#fff",
    borderRadius: "16px",
    border: "1px solid #DBDBDB",
    padding: "3px 9px",
    fontSize: "14px",
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default CollepsComp;
