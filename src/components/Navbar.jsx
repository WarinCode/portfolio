// * import react
import { useState, useEffect, useRef } from "react"

// * import libs
import { Link } from "react-router-dom"
import {
  FcHome,
  FcAbout,
  FcReading,
  FcGraduationCap,
  FcContacts,
} from "react-icons/fc"
import { RxHamburgerMenu } from "react-icons/rx"
import { BiArrowToRight } from "react-icons/bi"
import { ToastContainer } from "react-toastify"
import { optionNotify, notify } from "../Lib"
optionNotify.autoClose = 500;

// * import components
import SocialApp from "./layout/SocialApp"
import Footer from "./Footer"

// * import style
// import "../style/css/navbar.css"
import "../style/scss/_navbar.scss"
import "../style/scss/_icon.scss"

export default function Navbar({ PropNav }) {
  const [data, setData] = useState({});
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMenu = useRef("openMenu");
  const hambergerMenu = useRef("hamberger");

  useEffect(() => {
    (async () => {
      setData(await PropNav);
    })();
  }, []);

  const decorateText = (text) => ` < ${text} />`;

  const handleTabMenu = () => {
    if (
      openMenu.current.className === "" &&
      hambergerMenu.current.id === "HamburgerMenu"
    ) {
      openMenu.current.className = "nav-expanded";
      hambergerMenu.current.id = "HamburgerMenu-active";
      setMenuIsOpen(true);
    } else {
      openMenu.current.className = "";
      hambergerMenu.current.id = "HamburgerMenu";
      setMenuIsOpen(false);
    }
  };

  return (
    <nav ref={openMenu}>
      <ToastContainer />
      <aside className="nav-aside">
        <span
          ref={hambergerMenu}
          id="HamburgerMenu"
          onClick={() => {
            handleTabMenu();
            notify(menuIsOpen ? "แทบเมนูขยายออก" : "แทบเมนูหดลง", "success");
          }}
        >
          {menuIsOpen ? (
            <BiArrowToRight className="tab-menu" />
          ) : (
            <RxHamburgerMenu className="tab-menu" />
          )}
        </span>
        <div className="nav-userProfile">
          <img className="user-img" src={data?.avatar} alt={data?.fullname} />
          <h2 className="user-name">
            {data?.first_name} {data?.last_name}
          </h2>
          <p className="user-description">
            {decorateText(data?.my_stack?.dev)}
          </p>
        </div>
        <SocialApp PropSocial={data} />
        <ul className="nav-list">
          <li className="nav-items">
            <Link to="/" className="link">
              <FcHome className="Fc-icons" />
              <p>home</p>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/about" className="link">
              <FcAbout className="Fc-icons" />
              <p>about</p>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/profile" className="link">
              <FcReading className="Fc-icons" />
              <p>profile</p>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/education" className="link">
              <FcGraduationCap className="Fc-icons" />
              <p>education</p>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/contact" className="link">
              <FcContacts className="Fc-icons" />
              <p>contact</p>
            </Link>
          </li>
        </ul>
      </aside>
      <Footer />
    </nav>
  );
}
