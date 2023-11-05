import { useState, useEffect } from "react";
import "./HomePage.scss";
import Video from "../../components/Video/Video";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { calculateTimeAgo } from "../../functions/functions";

const baseUrl = process.env.REACT_APP_BASE_URL;

function HomePage() {
  const params = useParams();

  //setting state to get the videolist
  //----------------------------------------

  const [specificVideoDetails, setSpecificVideoDetails] = useState({});

  useEffect(() => {
    try {
      const getVideoDetails = async () => {
        if (params.videoId) {
          const response = await axios.get(
            `${baseUrl}/videos/${params.videoId}`
          );
          setSpecificVideoDetails(response.data);
        } else {
          const response = await axios.get(`${baseUrl}/videos`);
          const detailResponse = await axios.get(
            `${baseUrl}/videos/${response.data[0].id}`
          );
          setSpecificVideoDetails(detailResponse.data);
        }
      };
      getVideoDetails();
      window.scrollTo(0, 0);
    } catch {
      alert("There is an issue reaching the server, please try again later");
    }
  }, [params.videoId]);

  //Post comments function. Commented out for now to not break.
  //----------------------------------------

  const createComment = async (event) => {
    try {
      const newComment = {
        name: event.target.commentFormName.value,
        comment: event.target.commentFormText.value,
      };

      const postComment = async (newComment, dynamicUrl) => {
        try {
          await axios.post(
            `${baseUrl}/videos/${dynamicUrl}/comments`,
            newComment
          );
        } catch {
          alert("Error communicating with server, please try again later");
        }
      };
      if (params.videoId) {
        await postComment(newComment, params.videoId);
        const response = await axios.get(`${baseUrl}/videos/${params.videoId}`);
        setSpecificVideoDetails(response.data);
      } else {
        const response = await axios.get(`${baseUrl}/videos`);
        await postComment(newComment, response.data[0].id);

        const detailResponse = await axios.get(
          `${baseUrl}/videos/${response.data[0].id}`
        );
        setSpecificVideoDetails(detailResponse.data);
      }
    } catch {
      alert("There is an issue reaching the server, please try again later");
    }
  };

  //Delete comments function
  //----------------------------------------
  const changeComment = async (event) => {
    const deleteComment = async (commentId, dynamicUrl) => {
      try {
        await axios.delete(
          `${baseUrl}/videos/${dynamicUrl}/comments/${commentId}`
        );
      } catch {
        alert("Error communicating with server, please try again later");
      }
    };
    if (params.videoId) {
      await deleteComment(event, params.videoId);
      const response = await axios.get(`${baseUrl}/videos/${params.videoId}`);
      setSpecificVideoDetails(response.data);
    } else {
      const response = await axios.get(`${baseUrl}/videos`);
      await deleteComment(event, response.data[0].id);
      const detailResponse = await axios.get(
        `${baseUrl}/videos/${response.data[0].id}`
      );
      setSpecificVideoDetails(detailResponse.data);
    }
  };

  //Like comments function
  //----------------------------------------
  const commentsLike = async (event) => {
    const likeComment = async (commentId, dynamicUrl) => {
      try {
        await axios.put(
          `${baseUrl}/videos/${dynamicUrl}/comments/${commentId}`
        );
      } catch {
        alert("Error communicating with server, please try again later");
      }
    };
    if (params.videoId) {
      await likeComment(event, params.videoId);
      const response = await axios.get(`${baseUrl}/videos/${params.videoId}`);
      setSpecificVideoDetails(response.data);
    } else {
      const response = await axios.get(`${baseUrl}/videos`);
      await likeComment(event, response.data[0].id);
      const detailResponse = await axios.get(
        `${baseUrl}/videos/${response.data[0].id}`
      );
      setSpecificVideoDetails(detailResponse.data);
    }
  };

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
                changeComment={changeComment}
                commentsLike={commentsLike}
              />
            </div>
            <div>
              <div className="details__right">
                <VideoList selectedVideo={specificVideoDetails} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
