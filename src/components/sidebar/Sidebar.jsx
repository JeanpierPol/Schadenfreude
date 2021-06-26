import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  CastForEducation,
} from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="siderListItem">
            <RssFeed className="sidebarIcon" />
            <span className="siderbarListItemTetx">Feed</span>
          </li>
          <li className="siderListItem">
            <Chat className="sidebarIcon" />
            <span className="siderbarListItemTetx">Chat</span>
          </li>
          <li className="siderListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="siderbarListItemTetx">Videos</span>
          </li>
          <li className="siderListItem">
            <Group className="sidebarIcon" />
            <span className="siderbarListItemTetx">Group</span>
          </li>
          <li className="siderListItem">
            <Bookmark className="sidebarIcon" />
            <span className="siderbarListItemTetx">Bookmark</span>
          </li>
          <li className="siderListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="siderbarListItemTetx">Help</span>
          </li>
          <li className="siderListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="siderbarListItemTetx">Work</span>
          </li>
          <li className="siderListItem">
            <Event className="sidebarIcon" />
            <span className="siderbarListItemTetx">Event</span>
          </li>
          <li className="siderListItem">
            <CastForEducation className="sidebarIcon" />
            <span className="siderbarListItemTetx">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendsImg"
              src="\assets\img\friends\1.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Mr.Pilkington</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendsImg"
              src="\assets\img\friends\2.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Zar</span>
          </li>{" "}
          <li className="sidebarFriend">
            <img
              className="sidebarFriendsImg"
              src="\assets\img\friends\3.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Nikolai</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendsImg"
              src="\assets\img\friends\4.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Manolo</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendsImg"
              src="\assets\img\friends\5.jpg"
              alt=""
            />
            <span className="sidebarFriendName">karem</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendsImg"
              src="\assets\img\friends\6.jpg"
              alt=""
            />
            <span className="sidebarFriendName">otto</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
