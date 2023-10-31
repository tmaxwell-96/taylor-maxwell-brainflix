import "./VideoList.scss";
import VideoListCard from "../VideoListCard/VideoListCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8080";
// const apiKey = "c1dad333-eff5-4963-8a23-1c07713aef66";

//Fetch videolist. Lowest possible parent instead being done on homepage.
//--------------------------------------------------------

const VideoList = ({ selectedVideo }) => {
  const [videoList, setVideoList] = useState([]);

  const getVideoList = async () => {
    const response = await axios.get(`${baseUrl}/videos`);
    setVideoList(response.data);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <section className="videolist">
      <h3 className="videolist__header">NEXT VIDEOS</h3>
      <div className="videolist__wrapper">
        {videoList
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => {
            return (
              <Link
                key={video.id}
                to={`/${video.id}`}
                className="videolist__child"
              >
                <VideoListCard key={video.id} video={video} />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default VideoList;
