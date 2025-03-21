import { FaArrowRight } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = ({ active }) => {
  return (
    <div className={`sidebar ${active && "active"}`}>
      <div className="menus">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Services</a>
        <button style={{ margin: "0px" }}>
          Resume <FaArrowRight />
        </button>
        <IoSunny className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
