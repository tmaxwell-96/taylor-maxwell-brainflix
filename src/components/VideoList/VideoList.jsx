import "./VideoList.scss";
import VideoListCard from "../VideoListCard/VideoListCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://project-2-api.herokuapp.com";
const apiKey = "c1dad333-eff5-4963-8a23-1c07713aef66";

const VideoList = ({ selectedVideo }) => {
  const [videoList, setVideoList] = useState([]);

  const getVideoList = async () => {
    const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
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
