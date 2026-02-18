import Hero from "./Hero";
import Planet from "./Planet";
import earthvideo from "../Assets/EarthVideo.mp4";
import "../Styles/Section.css";
import { useEffect } from "react";

function Section() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach(card => observer.observe(card));
    }, []);

    return (
        <div className="section">
            <video className="section-bg-video" src={earthvideo} autoPlay loop muted />

            <div className="section-content">
                <div className="card"><Hero /></div>
                <div className="planet">
                    <Planet />
                </div>
            </div>
        </div>
    );
}

export default Section;