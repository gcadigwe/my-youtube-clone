import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./Searchpage.css";
import Channel from "../Channel/Channel";

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
    </div>
  );
}

export default Searchpage;
