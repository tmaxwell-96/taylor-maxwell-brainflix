import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/Icons/search.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} className="nav__image" alt="BrainFlix logo" />
        <div className="nav__mid">
          <div className="nav__overlay">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input
            name="searchbar"
            type="text"
            className="nav__searchbar"
            placeholder=" Search"
          ></input>
          <div className="nav__profile"></div>
        </div>
        <button className="nav__button">Upload</button>
      </nav>
    </header>
  );
}

export default Header;
