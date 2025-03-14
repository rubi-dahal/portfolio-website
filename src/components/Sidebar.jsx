import { FaArrowRight } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Sidebar.css";

const Sidebar = ({ active }) => {
  return (
    <div className={`sidebar ${active && "active"}`}>
      <div className="menus">
        <a href="/project">Home</a>
        <a href="/contact">About</a>
        <a href="/blog">Services</a>
        <button style={{ margin: "0px" }}>
          Resume <FaArrowRight />
        </button>
        <IoSunny className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
