import "./App.scss";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <>
      <Header />

      <Video />

      <Comments videoDetails={videoDetails} />
    </>
  );
}

export default App;
