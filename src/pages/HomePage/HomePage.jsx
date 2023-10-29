import { useState, useEffect } from "react";
import "./HomePage.scss";
import Video from "../../components/Video/Video";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { calculateTimeAgo } from "../../functions/functions";

const baseUrl = "https://project-2-api.herokuapp.com";
const apiKey = "c1dad333-eff5-4963-8a23-1c07713aef66";

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
            `${baseUrl}/videos/${params.videoId}?api_key=${apiKey}`
          );
          setSpecificVideoDetails(response.data);
        } else {
          const response = await axios.get(
            `${baseUrl}/videos?api_key=${apiKey}`
          );
          const detailResponse = await axios.get(
            `${baseUrl}/videos/${response.data[0].id}?api_key=${apiKey}`
          );
          setSpecificVideoDetails(detailResponse.data);
        }
      };
      getVideoDetails();
    } catch {
      alert("There is an issue reaching the server, please try again later");
    }
  }, [params.videoId]);

  //Post comments function
  //----------------------------------------

  const createComment = async (event) => {
    try {
      const newComment = {
        name: event.target.commentFormName.value,
        comment: event.target.commentFormText.value,
      };

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
    } catch {
      alert("There is an issue reaching the server, please try again later");
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
