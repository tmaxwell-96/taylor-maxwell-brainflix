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
  // setVideoData never used as awaiting dynamic population in other sprints

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  // Event handler select video function
  //----------------------------------------

  function changeVideo(displayedVideoId) {
    const foundVideo = videoDetails.find(
      (videoObject) => videoObject.id === displayedVideoId
    );
    setSelectedVideo(foundVideo);
  }

  return (
    <>
      <Header />

      <Video selectedVideo={selectedVideo} />

      <div className="details">
        <div className="details__left">
          <VideoDetails
            videoDetails={videoDetails}
            selectedVideo={selectedVideo}
          />

          <Comments videoDetails={videoDetails} selectedVideo={selectedVideo} />
        </div>
        <div className="details__right">
          <VideoList
            videoDetailsSimple={videoDetailsSimple}
            changeVideo={changeVideo}
            selectedVideo={selectedVideo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
