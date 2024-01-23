import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerbackground">
      <img className="logobottom" src="../images/logo.png"></img>
      <div className="bluebar"></div>
      <div className="footertext">
        <h2>RICK AND MORTY DB | ALL RIGHTS RESERVED</h2>
        <div className="rightlinks">
          <Link to="/">
            <a>
              <h2>HOME</h2>
            </a>
          </Link>
          <Link to="/episodes">
            <a>
              <h2>EPISODES</h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
