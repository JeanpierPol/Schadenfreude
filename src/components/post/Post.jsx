import { MoreVert } from "@material-ui/icons";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="\assets\img\friends\1.jpg"
              alt=""
            />
            <span className="postUsername">Mr.Pilkington</span>
            <span className="postDate">hace 5 minutos</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Este es mi post</span>
          <img className="postImg" src="\assets\img\post\1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="" alt="" />
          </div>
          <div className="postBottomRight"></div>

        </div>
      </div>
    </div>
  );
}
