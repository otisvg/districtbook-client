import React from "react";
import { FaFacebook, FaSistrix, FaHome, FaFontAwesomeFlag, FaVideo, FaUsers, FaGamepad, FaPlus, FaBell, FaCaretDown } from "react-icons/fa";


const Header = () => {
  return (
  <div className="header">
    <div className="hleft">
      <div className="hleftlogo"> <FaFacebook className="hlogo"/></div>
      <div className="hsearch"><input type="text" placeholder="Search" className="hbar"/><FaSistrix className="hicon"/></div>
    </div>
    <div className="hcenter">
      <span className="cIcon">
        <FaHome className="hmicons"/>
          <span className="hnotify">31</span>
      </span>
      <span className="cIcon">
        <FaFontAwesomeFlag className="hmicons"/>
          <span className="hnotify">20</span>
      </span>
      <span className="cIcon">
        <FaVideo className="hmicons"/>
          <span className="hnotify">5</span>
      </span>
      <span className="cIcon">
        <FaUsers className="hmicons"/>
          <span className="hnotify">2</span>
      </span>
      <span className="cIcon">
        <FaGamepad className="hmicons"/>
          <span className="hnotify">4</span>
      </span>

    </div>
    <div className="hlast">
      <span className="hlastpart">
        <FaPlus />
      </span>

      <span className="hlastpart">
        <FaBell />
      </span>

      <span className="hlastpart">
        <FaCaretDown />
      </span>
      
    </div>
  </div>
  )
}

export default Header;