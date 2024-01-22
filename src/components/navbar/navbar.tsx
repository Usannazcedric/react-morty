import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <div className="nav">
            <Link to="/">
                <a>
                    <img
                        className={`navhome ${currentPage === '/' ? 'active' : ''}`}
                        src="../public/images/house.png"
                        alt="home"
                    />
                </a>
            </Link>
            <Link to="/episodes">
                <a>
                    <img
                        className={`navep ${currentPage === '/episodes' ? 'active' : ''}`}
                        src="../public/images/rectangles.png"
                        alt="episodes"
                    />
                </a>
            </Link>
        </div>
    );
}
