import "./UploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL;

const UploadPage = () => {
  // State variables and eventchange functions
  //--------------------------------
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    setSubmitted(false);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    setSubmitted(false);
  };

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
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (isFormValid()) {
      try {
        await axios.post(`${baseUrl}/videos/upload`, {
          title: title,
          description: description,
        });
      } catch {
        alert("Error communicating with server, please try again later");
      }

      setSubmitted(true);
      setTitle("");
      setDescription("");

      alert("Thank you for submitting! Now returning to home page.");
      navigate("/");
    } else {
      alert("Please fill form fields");
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
            <label htmlFor="videoTitle" className="uploadform__label">
              TITLE YOUR VIDEO{" "}
            </label>
            <input
              className={`uploadform__title ${
                submitted && !title ? "uploadform__title--error" : ""
              }`}
              name="videoTitle"
              type="text"
              placeholder="Add a title to your video"
              value={title}
              onChange={handleChangeTitle}
            />

            <label htmlFor="videoDescription" className="uploadform__label">
              ADD A VIDEO DESCRIPTION{" "}
            </label>
            <textarea
              className={`uploadform__description ${
                submitted && !description
                  ? "uploadform__description--error"
                  : ""
              }`}
              type="text"
              name="videoDescription"
              placeholder="Add a description to your video"
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
        </div>

        <div className="uploadform__bottom">
          <Link to="/">
            <h3 className="uploadform__cancel uploadform__cancel--wide">
              CANCEL
            </h3>
          </Link>

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
