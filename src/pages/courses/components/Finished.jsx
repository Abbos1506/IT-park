import React from "react";
import { finished } from "../../../utils/coursesData";
import { Link } from "react-router-dom";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import CoursesIcon1 from "../../../assets/image/coursesIcon1.png";
import { Progress } from "antd";

const Finished = () => {
  return (
    <div className="progress">
      <div className="progress__title">
        <h2>Tugallangan</h2>
      </div>
      <div className="progress__cards">
        {finished.map((item) => (
          <Link key={item.id}>
            <div className="finished__card">
              <div className="finished__card__title">
                <h2>{item.title}</h2>
              </div>
              <div className="card__info">
                <div className="card__info__date">
                  <i>
                    <CalendarOutlined />
                  </i>
                  <p>{item.date}</p>
                </div>
                <div className="card__info__time">
                  <i>
                    <ClockCircleOutlined />
                  </i>
                  <p>{item.time}</p>
                </div>
              </div>
              <div className="finished__card__range">
                <Progress percent={100} size={[342, 15]}/>
              </div>
              <div className="card__progresses">
                <div className="card__progres">
                  <i>
                    <CheckCircleOutlined />
                  </i>
                  <p>Tugallangan</p>
                </div>
              </div>
              <div className="card__profil">
                <img src={item.logo} alt="" />
                <p>{item.name}</p>
              </div>
              <div className="progress__image">
                <img src={CoursesIcon1} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Finished;
