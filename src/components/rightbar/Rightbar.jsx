import { Users } from "../../dummyData";
import { Co } from "../componentOnline/Co"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
          {/* {Users.map((u) => (
            <Online key={u.id} user={u}/>
          ))} */}

        </ul>
      </div>
    </div>
  );
}
