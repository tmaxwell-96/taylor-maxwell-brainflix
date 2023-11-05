import "./VideoList.scss";
import VideoListCard from "../VideoListCard/VideoListCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

//Fetch videolist. Lowest possible parent instead being done on homepage.
//--------------------------------------------------------

const VideoList = ({ selectedVideo }) => {
  const [videoList, setVideoList] = useState([]);

  const getVideoList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/videos`);
      setVideoList(response.data);
    } catch {
      alert("Error communicating with server, please try again later");
    }
  };

  useEffect(() => {
    getVideoList();
    window.scrollTo(0, 0);
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
