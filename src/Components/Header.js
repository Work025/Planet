import { useState } from "react";
import "../Styles/Header.css";

import mercury from "../Assets/Mercury.png";
import venus from "../Assets/Venus.png";
import earth from "../Assets/Earth.png";
import mars from "../Assets/Mars.png";
import jupiter from "../Assets/Jupiter.png";
import saturn from "../Assets/Saturn.png";
import uranus from "../Assets/Uranus.png";
import neptune from "../Assets/Neptune.png";
import blackHole from "../Assets/BlackHole.png";
import galaxy from "../Assets/Galaxy.png";
import sun from "../Assets/Sun.png";
import asteroid from "../Assets/Asteroid.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    // Planet / Space data
    const planets = [
        { img: mercury, name: "Mercury" },
        { img: venus, name: "Venus" },
        { img: earth, name: "Earth" },
        { img: mars, name: "Mars" },
        { img: jupiter, name: "Jupiter" },
        { img: saturn, name: "Saturn" },
        { img: uranus, name: "Uranus" },
        { img: neptune, name: "Neptune" },
    ];

    const space = [
        { img: blackHole, name: "Black Hole" },
        { img: galaxy, name: "Galaxy" },
        { img: sun, name: "Sun" },
        { img: asteroid, name: "Asteroid" },
    ];

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-logo">
                    <h1>Planet</h1>
                </div>

                {/* WRAPPER */}
                <div className={`header-wrapper ${menuOpen ? "active" : ""}`}>
                    <ul className="header-ul">
                        <li><a href="#home">Home</a></li>

                        {/* PLANETS */}
                        <li className="dropdown">
                            <div
                                className="dropdown-title"
                                onClick={() => toggleDropdown("planets")}
                            >
                                <span>Planets</span>
                                <i className={`fas fa-chevron-down ${openDropdown === "planets" ? "rotate" : ""}`}></i>
                            </div>
                            <div className={`ul-box mega ${openDropdown === "planets" ? "show" : ""}`}>
                                {planets.map((planet, idx) => (
                                    <div key={idx} className="planet-card horizontal">
                                        <img src={planet.img} alt={planet.name} />
                                        <div className="planet-info horizontal">
                                            <h4>{planet.name}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </li>

                        {/* SPACE */}
                        <li className="dropdown">
                            <div
                                className="dropdown-title"
                                onClick={() => toggleDropdown("space")}
                            >
                                <span>Space</span>
                                <i className={`fas fa-chevron-down ${openDropdown === "space" ? "rotate" : ""}`}></i>
                            </div>
                            <div className={`ul-box mega ${openDropdown === "space" ? "show" : ""}`}>
                                {space.map((s, idx) => (
                                    <div key={idx} className="planet-card horizontal">
                                        <img src={s.img} alt={s.name} />
                                        <div className="planet-info horizontal">
                                            <h4>{s.name}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </li>

                    </ul>
                </div>

                {/* HAMBURGER */}
                <div
                    className="header-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;