import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UploadPage = () => {
  // State variables and eventchange functions
  //--------------------------------
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  console.log(title);
  console.log(description);

  const isFormValid = () => {
    if (!title || !description) {
      return false;
    } else {
      return true;
    }
  };

  // Navigation and alert
  //--------------------------------
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      alert("Thank you for submitting! Now returning to home page.");
      navigate("/");
    } else {
      alert("Please fill form fields");
      console.log(title);
      console.log(description);
    }
  };
  return (
    <div className="upload">
      <h2 className="upload__header">Upload Video</h2>

      <form onSubmit={handleFormSubmit} className="uploadform">
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
              name="videoTitle"
              type="text"
              placeholder="Add a title to your video"
              value={title}
              onChange={handleChangeTitle}
            />

            <label className="uploadform__label">
              ADD A VIDEO DESCRIPTION{" "}
            </label>
            <textarea
              className="uploadform__description"
              type="text"
              name="videoDescription"
              placeholder="Add a description to your video"
              value={description}
              onChange={handleChangeDescription}
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
