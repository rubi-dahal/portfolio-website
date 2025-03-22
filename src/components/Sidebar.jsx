import { FaArrowRight } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = ({ active }) => {
  return (
    <div className={`sidebar ${active && "active"}`}>
      <div className="menus">
        <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#footer">Contact</a>
        <button style={{ margin: "0px" }}>
          Resume <FaArrowRight />
        </button>
        <IoSunny className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
