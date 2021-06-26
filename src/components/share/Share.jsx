import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="\assets\img\zavatar.png"
            alt=""
          />
          <input
            placeholder="¿Que estás pensando, usuario"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButton">
          <div className="shareOptions">
            <div className="shareOptions">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Foto/Vídeo</span>
            </div>
            <div className="shareOptions">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOptions">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Ubicacion</span>
            </div>
            <div className="shareOptions">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Sentimiento</span>
            </div>          
            <button className="shareBtn">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
