import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter(u=>u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{Users.filter(u=>u.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="\assets\img\emoticons\like.png"
              alt=""
            />
            <img
              className="likeIcon"
              src="\assets\img\emoticons\heart.jpg"
              alt=""
            />
            <span className="postLikeCounter">{post.like} personas</span>
          </div>
          <div className="postBottomRight"></div>
          <span className="postCommentText">{post.comment} comentarios</span>
        </div>
      </div>
    </div>
  );
}
