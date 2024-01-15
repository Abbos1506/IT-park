import React from "react";
import { Tabs } from "antd";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import TabFour from "./TabFour";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Ma’lumot",
    children: <TabOne/>,
  },
  {
    key: "2",
    label: "Fayllar",
    children: <TabTwo/>,
  },
  {
    key: "3",
    label: "Uyga vazifa",
    children: <TabThree/>,
  },
  {
    key: "4",
    label: "Sinov testi",
    children: <TabFour/>,
  },
];

const PageLeftTabs = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default PageLeftTabs;
