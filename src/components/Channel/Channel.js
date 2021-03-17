import React from "react";
import "./Channel.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

function Channel({ image, channel, subs, verified, description, noOfVideos }) {
  return (
    <div className="channel">
      <div className="channel__left">
        <Avatar className="channel__image" src={image} />
        <div className="channel__info">
          <div className="channel__text">
            <h4>
              {channel}{" "}
              {verified && <CheckCircleIcon className="channel__icon" />}
            </h4>
            <p>
              {subs} subscribers . {noOfVideos} videos
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="channel__right">
        <button>SUBSCRIBED</button>
        <NotificationsActiveIcon />
      </div>
    </div>
  );
}

export default Channel;
