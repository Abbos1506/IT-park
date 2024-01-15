import React from "react";
import RootLogo from "../assets/image/rootIcon.png";
import rootList from "../utils/rootList";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/home";
import CoursesPage from "../pages/courses";
import TablePage from "../pages/table";
import TeachersPage from "../pages/teachers";
import ProfilePage from "../pages/profile";
import PaymentsPage from "../pages/payments";
import PageOne from "../pages/courses/components/PageOne";

const Root = () => {
  return (
    <div className="root">
      <div className="root__left">
        <div className="root__left__logo">
          <img src={RootLogo} alt="" />
        </div>
        <div className="root__menu">
          {rootList.map((item) => (
            <Link to={item.path} className="root__item" key={item.id}>
              <i className="root__item__icon">{item.icon}</i>
              <h3 className="root__item__title">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/page-one" element={<PageOne/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Root;
