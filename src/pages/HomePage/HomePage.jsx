import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
// import videoDetailsSimple from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import Video from "../../components/Video/Video";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import axios from "axios";

const baseUrl = "https://project-2-api.herokuapp.com";
const apiKey = "c1dad333-eff5-4963-8a23-1c07713aef66";

function HomePage() {
  const params = useParams();
  //setting state to get the videolist
  const [videoList, setVideoList] = useState([]);
  const [specificVideoDetails, setSpecificVideoDetails] = useState({});

  const getVideoList = async () => {
    const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
    // console.log(response);
    setVideoList(response.data);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  useEffect(() => {
    const getVideoDetails = async () => {
      const response = await axios.get(
        `${baseUrl}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`
      );
      setSpecificVideoDetails(response.data);
    };
    getVideoDetails();
  }, []);

  //old videodetails values, to be deleted
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

  // Dynamic Timestamp Function
  //----------------------------------------

  function calculateTimeAgo(timestamp) {
    const currentDate = new Date();
    const commentDate = new Date(timestamp);

    const timeDifference = currentDate - commentDate;

    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30.437); //average number of days in a month
    const yearsAgo = Math.floor(monthsAgo / 12);

    if (yearsAgo > 0) {
      if (yearsAgo === 1) {
        return `${yearsAgo} Year Ago`;
      } else {
        return `${yearsAgo} Years Ago`;
      }
    } else if (monthsAgo > 0) {
      if (monthsAgo === 1) {
        return `${monthsAgo} Month Ago`;
      } else {
        return `${monthsAgo} Months Ago`;
      }
    } else if (daysAgo > 0) {
      if (daysAgo === 1) {
        return `${daysAgo} Day Ago`;
      } else {
        return `${daysAgo} Days Ago`;
      }
    } else if (hoursAgo > 0) {
      if (hoursAgo === 1) {
        return `${hoursAgo} Hour Ago`;
      } else {
        return `${hoursAgo} Hours Ago`;
      }
    } else if (minutesAgo > 0) {
      if (minutesAgo === 1) {
        return `${minutesAgo} Minute Ago`;
      } else {
        return `${minutesAgo} Minutes Ago`;
      }
    } else {
      return `Just Now`;
    }
  }

  return (
    <>
      <div>
        {specificVideoDetails.id && (
          <>
            <Video selectedVideo={selectedVideo} />

            <div className="details__left">
              <VideoDetails
                videoDetails={specificVideoDetails}
                selectedVideo={selectedVideo}
                calculateTimeAgo={calculateTimeAgo}
              />

              <Comments
                calculateTimeAgo={calculateTimeAgo}
                videoDetails={specificVideoDetails}
                selectedVideo={selectedVideo}
              />
            </div>
          </>
        )}
      </div>

      <div className="details">
        {videoList[0] && (
          <div className="details__right">
            <VideoList
              videoDetailsSimple={videoList}
              changeVideo={changeVideo}
              selectedVideo={selectedVideo}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
