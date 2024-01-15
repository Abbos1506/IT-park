import React from "react";
import PageLeftTabs from "./Tabs/PageLeftTabs";

const PageOneLeft = () => {
  return (
    <div className="page-one__left">
      <div className="page-one__left__video">
        <iframe
          width="800"
          height="422"
          src="https://www.youtube.com/embed/dt9DqqIOCi8"
          title="#1 WEB DASTUR. WEB SAYT YOZAMIZ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="page-one__left__title">
          Mavzu: Adobe photoshop panelining instrumentlar paneli
        </h1>
      </div>
      <div className="page-one__tabs">
        <PageLeftTabs/>
      </div>
    </div>
  );
};

export default PageOneLeft;
