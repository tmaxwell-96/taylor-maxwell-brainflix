import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import { Link } from "react-router-dom";

const UploadPage = () => {
  return (
    <div className="upload">
      <h2 className="upload__header">Upload Video</h2>

      <form className="uploadform">
        <div className="uploadform__top">
          <div className="uploadform__container">
            <h3 className="uploadform__label">VIDEO THUMBNAIL</h3>
            <img
              className="uploadform__thumbnail"
              src={thumbnail}
              alt="upload  thumbnail"
            />
          </div>
          <div className="uploadform__inputs">
            <label className="uploadform__label">TITLE YOUR VIDEO </label>
            <input
              className="uploadform__title"
              type="text"
              placeholder="Add a title to your video"
            />

            <label className="uploadform__label">
              ADD A VIDEO DESCRIPTION{" "}
            </label>
            <textarea
              className="uploadform__description"
              type="text"
              placeholder="Add a description to your video"
            />
          </div>
        </div>

        <div className="uploadform__bottom">
          <h3 className="uploadform__cancel uploadform__cancel--wide">
            CANCEL
          </h3>
          <div className="uploadform__buttonwrapper">
            <div className="uploadform__button-overlay">
              <img
                className="uploadform__upload-icon"
                src={uploadIcon}
                alt="upload icon"
              />
            </div>
            <button className="uploadform__button">PUBLISH</button>
          </div>
          <Link to="/">
            {" "}
            <h3 className="uploadform__cancel uploadform__cancel--mobile">
              CANCEL
            </h3>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
