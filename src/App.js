import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";
import "./App.css";

class App extends Component {
  state = {
    videos: "",
    selectedVideo: null,
  };
  handleSubmit = async (userInput) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyB-re3S2EeWqXdoqsfd4v3BT-JRJN_ZA-4",
        q: userInput,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(response.data.items);
  };
  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
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
  }
}

export default App;
