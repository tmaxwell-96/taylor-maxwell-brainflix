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
      <form className="form">
        <div className="form__right">
          <div className="form__comment-wrapper">
            <label
              htmlFor="form__comment"
              name="commentText"
              className="form__label"
            >
              TITLE YOUR VIDEO
            </label>
            <textarea
              className="form__title"
              name="commentFormText"
              id="form__comment"
              placeholder="Add a title to your video"
            ></textarea>
            <label
              htmlFor="form__comment"
              name="commentText"
              className="form__label"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="form__comment"
              name="commentFormText"
              id="form__comment"
              placeholder="Add a Video Description"
            ></textarea>
          </div>

          <div className="form__buttonwrapper">
            <div className="form__button-overlay">
              <img
                className="form__upload-icon"
                src={uploadIcon}
                alt="upload icon"
              />
            </div>
            <button className="form__button">PUBLISH</button>
          </div>
        </div>
      </form>
      <h3 className="upload__cancel">CANCEL</h3>
    </div>
  );
};

export default UploadPage;
