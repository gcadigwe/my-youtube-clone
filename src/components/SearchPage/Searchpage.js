import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./Searchpage.css";
import Channel from "../Channel/Channel";
import Videorow from "../Videorow/Videorow";

function Searchpage() {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />
      <Channel
        image="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="FreeCodeCamp.org"
        verified
        subs="100M"
        noOfVideos="60"
        description="Learn to code here..(Sarzy's Youtube)"
      />
      <hr />
      <Videorow
        views="2.3M"
        subs="100M"
        description="In this full course for beginners, you will learn how to implement user authentication from scratch in your web apps..."
        timestamp="sarzy minutes ago"
        image="https://img.youtube.com/vi/F-sFp_AvHc8/maxresdefault.jpg"
        channel="freeCodeCamp.org"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo"
        title="User Authentication in Web Apps (Passport.js, Node, Express)"
      />
    </div>
  );
}

export default Searchpage;
