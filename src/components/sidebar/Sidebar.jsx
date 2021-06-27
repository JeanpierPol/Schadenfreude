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
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
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
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
