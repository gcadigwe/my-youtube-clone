import React from "react";
import "./Videorow.css";
import Avatar from "@material-ui/core/Avatar";

function Videorow({
  views,
  channelImage,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="videorow__text">
        <h3>{title}</h3>
        <p>
          {views} views •{" "}
          <span className="videorow__timestamp">{timestamp}</span>
        </p>
        <p className="videorow__channelinfo">
          <Avatar
            className="videorow__channelImage"
            src={channelImage}
            alt=""
          />
          <p className="videorow__channelname">{channel}</p>
        </p>
        <p className="videorow__description">{description}</p>
      </div>
    </div>
  );
}

export default Videorow;
