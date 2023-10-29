import "./Video.scss";

const Video = ({ selectedVideo }) => {
  const videoImage = selectedVideo.image;
  return (
    <video
      src="https://project-2-api.herokuapp.com/stream?api_key=c1dad333-eff5-4963-8a23-1c07713aef66"
      className="video__image"
      poster={videoImage}
      controls
    ></video>
  );
};

export default Video;
