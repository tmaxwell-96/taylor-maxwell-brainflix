import "./VideoList.scss";
import VideoListCard from "../VideoListCard/VideoListCard";

const VideoList = (props) => {
  // console.log(props.videoDetails);
  return (
    <div className="videolist">
      <h3 className="videolist__header">NEXT VIDEOS</h3>
      <div className="videolist__wrapper">
        {props.videoDetails.map((video) => {
          return <VideoListCard key={video.title} video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideoList;
