import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./videoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, i) => (
    <VideoItem onVideoSelect={onVideoSelect} key={i} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
