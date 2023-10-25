import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/Icons/upload.svg";

const UploadPage = () => {
  return (
    <div className="upload">
      <h2 className="upload__header">Upload Video</h2>
      <div className="upload__thumbnail-container">
        <h3 className="upload__label">Video Thumbnail</h3>
        <img
          className="upload__thumbnail"
          src={thumbnail}
          alt="upload  thumbnail"
        />
      </div>
      <form className="upload__form">
        <label className="upload__label" htmlFor="title">
          {" "}
          TITLE YOUR VIDEO
          <input
            name="title"
            type="text"
            placeholder="Add a title to your video"
          />
        </label>
        <label className="upload__label" htmlFor="title">
          {" "}
          ADD A VIDEO DESCRIPTION
          <textarea
            name="description"
            type="text"
            placeholder="Add a description of your video"
          />
        </label>
        <div className="nav__buttonwrapper">
          <div className="nav__button-overlay">
            <img
              className="nav__upload-icon"
              src={uploadIcon}
              alt="upload icon"
            />
          </div>
          <button className="nav__button">PUBLISH</button>
        </div>
        <h3 className="upload__cancel">CANCEL</h3>
      </form>
    </div>
  );
};

export default UploadPage;
