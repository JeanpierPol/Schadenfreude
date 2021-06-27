import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight"></div>
        <Sidebar />
        <div className="profileRightTop profileContainer">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="\assets\img\fondo\1.png"
              alt=""
            />
            <img
              className="profileUserImg"
              src="\assets\img\zavatar.png"
              alt=""
            />
          </div>
          <div className="profileInfo">
                <h4 className="profileInfoName">User</h4>
                <span className="profileInfoDesc">Hola mundo</span>
            </div>

          <Feed className="profileRightBottom" />
        </div>
        <Rightbar profile/>
        {/* <div className="profileRightTop">
            <img src="\assets\img\zavatar.png" alt="" />
        </div>
        <div className="profileRightBottom">
          <Feed />
          {/* <Rightbar /> 
        </div>*/}
      </div>
    </>
  );
}
