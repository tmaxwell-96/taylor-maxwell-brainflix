import { useState } from "react";
import "./App.scss";
import videoDetailsSimple from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  const [videoData, setVideoData] = useState(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

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
    // TODO: add sections or divs around the components
    //TODO: consider making the button into a component
    <>
      <Header />

      <Video selectedVideo={selectedVideo} />

      <VideoDetails videoDetails={videoDetails} selectedVideo={selectedVideo} />

      <Comments videoDetails={videoDetails} selectedVideo={selectedVideo} />

      <VideoList
        videoDetailsSimple={videoDetailsSimple}
        changeVideo={changeVideo}
        selectedVideo={selectedVideo}
      />
    </>
  );
}

export default App;
