import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">schadenfreude</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Search" type="text" className="seachInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLinks">Home</span>
            <span className="topbarLinks">Home</span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>

          <img src="\assets\img\zavatar.png" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}
