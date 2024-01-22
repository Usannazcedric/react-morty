import { Link } from "react-router-dom";
import "./navbar.css";


export default function Navbar() {
    return (
        <div className="nav">
        <Link to="/">
            <a>
            <img
                className="navhome"
                src="../public/images/house.png"
                alt="home"
            />
            </a>
        </Link>
        <Link to="/episodes">
            <a>
            <img
                className="navep"
                src="../public/images/rectangles.png"
                alt="episodes"
            />
            </a>
        </Link>
        </div>
    );
}