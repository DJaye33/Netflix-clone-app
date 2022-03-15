import React from "react";
import Logo from "../assets/Netflix-logo.svg";
import Avatar from "../assets/Netflix-avatar.png";

import "../styles/Nav.css";

function Nav() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  });

  function checkScroll() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Logo} alt="netflix clone" />
      <img className="nav__avatar" src={Avatar} alt="netflix avatar" />
    </div>
  );
}

export default Nav;
