import "./Video.scss";

const Video = (props) => {
  const videoImage = props.selectedVideo.image;
  return <video className="video__image" poster={videoImage} controls></video>;
};

export default Video;
