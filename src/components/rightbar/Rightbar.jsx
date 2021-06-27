import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="\assets\img\emoticons\regalo.png"
            alt=""
            className="bithdayImg"
          />
          <span className="birthdayText">
            <b>Manolo </b>
            <b>y otros tres amigos</b>
            cumplen años hoy
          </span>
        </div>
        <img
          src="\assets\img\publicidad\ej1.png"
          alt=""
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Contactos</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar=()=>{
    return(
      <>
        <h4 className="rightbarTitle">Informacion de usuario</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Pais:</span>
            <span className="rightbarInfoValue">España</span>

          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ciudad:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Amigos</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="\assets\img\friends\1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingsName">Mr pinkelton</span>
          </div>          
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
