import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import moon from "../Assets/moon.glb";
import "../Styles/Hero.css";

// ===================== MOON MODEL =====================
function MoonModel() {
    const { scene } = useGLTF(moon);
    const rotateRef = useRef();

    useFrame(() => {
        if (rotateRef.current) {
            rotateRef.current.rotation.y += 0.0015; // Sekin aylanish
        }
    });

    return <primitive ref={rotateRef} object={scene} scale={5} position={[0, 0, 0]} />;
}

// ===================== HERO CARD COMPONENT =====================
function HeroCard({ title, description, xStart, yStart, textAlign }) {
    const { scrollYProgress } = useScroll();

    // Scroll asosida Moon harakati (hook shu component ichida)
    const yPos = useTransform(scrollYProgress, [0, 1], [yStart, "50vh"]);
    const xPos = useTransform(scrollYProgress, [0, 1], [xStart, "0%"]);

    return (
        <motion.div className="hero">
            <div className="hero-about" style={{ textAlign }}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <motion.div className="moon" style={{ y: yPos, x: xPos }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} />
                    <MoonModel />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </motion.div>
        </motion.div>
    );
}

// ===================== HERO (JSON DATA) =====================
function Hero() {
    const moonCards = [
        {
            title: "Moon Overview",
            description:
                "The Moon is Earth's only natural satellite. It affects tides, illuminates the night, and has inspired countless myths and explorations.",
            xStart: "30%", // O'ngda
            yStart: "0vh",
            textAlign: "left",
        },
        {
            title: "Moon Facts",
            description:
                "The Moon is about 1/4 the size of Earth and has no atmosphere. Its surface is covered with craters and regolith, formed over billions of years.",
            xStart: "0%", // O'rtada
            yStart: "40vh",
            textAlign: "center",
        },
        {
            title: "Moon Exploration",
            description:
                "Humans first landed on the Moon in 1969. Ongoing missions aim to explore lunar water, geology, and potential bases for future space travel.",
            xStart: "-30%", // Chapga siljiydi
            yStart: "80vh",
            textAlign: "left",
        },
        {
            title: "Moon Mysteries",
            description:
                "The Moon still holds many mysteries. Dark side, hidden ice, and geological secrets are key areas for future exploration.",
            xStart: "0%",
            yStart: "100vh",
            textAlign: "center",
        },
    ];

    return (
        <div className="hero-container">
            {moonCards.map((card, idx) => (
                <HeroCard
                    key={idx}
                    title={card.title}
                    description={card.description}
                    xStart={card.xStart}
                    yStart={card.yStart}
                    textAlign={card.textAlign}
                />
            ))}
        </div>
    );
}

export default Hero;