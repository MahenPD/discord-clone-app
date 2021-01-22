import React from "react";
import "./SidebarChannel.css";

function SidebarChannel(props) {
  const { id, channel } = props;

  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>Youtube
      </h4>
    </div>
  );
}

export default SidebarChannel;
