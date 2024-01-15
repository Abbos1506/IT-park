import Finished from "./Finished";
import ProgressComp from "./Progress";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <div className="header__comp">
      <div className="progress__link">
        <Link to={"/"}>Bosh sahifa</Link> /
      </div>
      <ProgressComp />
      <Finished />
    </div>
  );
};

export default HeaderComp;
