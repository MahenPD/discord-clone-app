import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import CallIcon from "@material-ui/icons/Call";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./Firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState();

  useEffect(() => {
    db.collection('channels').onSnapshot()
  }, [])

  return (
    <div className="sidebar">
      <div class="sidebar__top">
        <h3>Discord</h3>
        <ExpandMoreIcon />
      </div>

      <div class="sidebar__channels">
        <div class="sidebar__channelsHeader">
          <div class="sidebarHeader">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div class="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div class="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div class="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div class="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div class="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div class="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div class="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
