import React from "react";
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";

const Status = () => {

  return (
  <div className="status">
    <div className="status-f">
      <div className="status-f-img">
        <span>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
        </span>
      </div>
        <div className="status-f-i">
          <input type="text" className="status-f-in" placeholder="Whats on your mind?" />
        </div>
    </div>
    <div className="status-se">
      <FaVideo />

      <FaRegFileImage />

      <FaRegGrinAlt />

    </div>
  </div>

  )

}

export default Status;