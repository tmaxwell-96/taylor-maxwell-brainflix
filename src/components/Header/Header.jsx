import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/Icons/search.svg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} className="nav__logo" alt="BrainFlix logo" />
        <div className="nav__mid">
          <div className="nav__searchbarwrapper">
            <div className="nav__overlay">
              <img src={searchIcon} alt="search icon" />
            </div>
            <input
              name="searchbar"
              type="text"
              className="nav__searchbar"
              placeholder=" Search"
            ></input>
          </div>
          <div className="nav__profile nav__profile--mobile"></div>
        </div>
        <div className="nav__buttonwrapper">
          <div className="nav__button-overlay">
            <img
              className="nav__upload-icon"
              src={uploadIcon}
              alt="upload icon"
            />
          </div>
          <button className="nav__button">UPLOAD</button>
          <div className="nav__profile nav__profile--wide"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
