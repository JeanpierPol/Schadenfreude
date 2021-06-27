import React from "react";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendsImg"
        src={user.profilePicture}
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
