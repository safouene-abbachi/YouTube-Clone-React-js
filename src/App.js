import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(userInput) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyB-re3S2EeWqXdoqsfd4v3BT-JRJN_ZA-4",
        q: userInput,
      },
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
};
export default App;
