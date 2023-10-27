import { useState, useEffect } from "react";
import "./HomePage.scss";
import Video from "../../components/Video/Video";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = "https://project-2-api.herokuapp.com";
const apiKey = "c1dad333-eff5-4963-8a23-1c07713aef66";

function HomePage() {
  const params = useParams();

  //setting state to get the videolist
  //----------------------------------------

  const [specificVideoDetails, setSpecificVideoDetails] = useState({});

  useEffect(() => {
    const getVideoDetails = async () => {
      if (params.videoId) {
        const response = await axios.get(
          `${baseUrl}/videos/${params.videoId}?api_key=${apiKey}`
        );
        setSpecificVideoDetails(response.data);
      } else {
        const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
        const detailResponse = await axios.get(
          `${baseUrl}/videos/${response.data[0].id}?api_key=${apiKey}`
        );
        setSpecificVideoDetails(detailResponse.data);
      }
    };
    getVideoDetails();
  }, [params.videoId]);

  //Post comments function
  //----------------------------------------

  const createComment = async (event) => {
    const newComment = {
      name: event.target.commentFormName.value,
      comment: event.target.commentFormText.value,
    };
    console.log(newComment);
    const postComment = async (newComment, dynamicUrl) => {
      const post = await axios.post(
        `${baseUrl}/videos/${dynamicUrl}/comments?api_key=${apiKey}`,
        newComment
      );
    };
    if (params.videoId) {
      await postComment(newComment, params.videoId);
      const response = await axios.get(
        `${baseUrl}/videos/${params.videoId}?api_key=${apiKey}`
      );
      setSpecificVideoDetails(response.data);
    } else {
      const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
      await postComment(newComment, response.data[0].id);

      const detailResponse = await axios.get(
        `${baseUrl}/videos/${response.data[0].id}?api_key=${apiKey}`
      );
      setSpecificVideoDetails(detailResponse.data);
    }
  };

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
    <div>
      {specificVideoDetails.id && (
        <>
          <Video selectedVideo={specificVideoDetails} />
          <div className="details">
            <div className="details__left">
              <VideoDetails
                selectedVideo={specificVideoDetails}
                calculateTimeAgo={calculateTimeAgo}
              />

              <Comments
                calculateTimeAgo={calculateTimeAgo}
                selectedVideo={specificVideoDetails}
                createComment={createComment}
              />
            </div>
            <div>
              <div className="details__right">
                <VideoList
                  // videoDetailsSimple={videoList}
                  selectedVideo={specificVideoDetails}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
