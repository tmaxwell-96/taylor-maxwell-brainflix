import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  // Event handler select video function
  //----------------------------------------

  function changeVideo(displayedVideoId) {
    const foundVideo = videoDetails.find(
      (videoObject) => videoObject.id === displayedVideoId
    );
    // console.log(displayedVideo);
    setSelectedVideo(foundVideo);
  }

  return (
    <>
      <Header />

      <Video videoDetails={videoDetails} selectedVideo={selectedVideo} />

      <Comments videoDetails={videoDetails} selectedVideo={selectedVideo} />

      <VideoList videoDetails={videoDetails} changeVideo={changeVideo} />
    </>
  );
}

export default App;
