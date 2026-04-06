import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Reev2.css";
import Footer from "../Footer/Footer.jsx";
import MultiCarousel from "../MoviesCarousel/MoviesCarousel.jsx";
import M9 from "../../assets/M9.jpeg";
import M2 from "../../assets/M2.jpeg";
import M3 from "../../assets/M10.jpeg";
import M10 from "../../assets/M11.jpeg";
import M5 from "../../assets/M12.jpeg";
import M6 from "../../assets/M6.jpeg";
import M7 from "../../assets/M7.jpeg";
import M8 from "../../assets/M8.jpeg";
import M1 from "../../assets/M13.jpeg";
import M14 from "../../assets/M14.jpeg";
import M15 from "../../assets/M15.jpeg";



import gokartImg from "../../assets/M10.jpeg";
const secondCarouselData = [{ img: M1 },{ img: M9 }, { img: M14 }, { img: M2 }, { img: M3 }, { img: M8 }, { img: M5 }, { img: M6 }, { img: M7 }, { img: M10 },{ img: M1 },  { img: M15 }];
export default function GoKart() {
  return (
    <div className="gokart-container">
      <div className="flex-grow">
        <Anmol />
        <About />
<div style={{ margin: "50px 0" }}>
          <MultiCarousel data={secondCarouselData} />
        </div>      
  <Timeline />
      </div>
      <Footer />
    </div>
  );
}
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
function Anmol() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <main className="Ashish ">
      {/* container 1 */}
      <section className="relative z-10">
        <div className=" mx-auto px-4 pt-[30%] sm:pt-[15%] md:pt-[1%] pb-[12%] md:pb-[5%] mt-[7%]">
          <div className="text-center relative">
            <div className="Jointe">
              <h2 className={`learn-mo-line ${animate ? "active" : ""}`}>
                <span className="section-heading ">About REEV</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <hr className="bg-black border-b border-red-500" />
    </main>
  );

}

function About() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="w-full bg-[#0b0b0b] min-h-screen pt-20 lg:pt-24" style={{ position: 'relative', zIndex: 1 }}>
      {/* container 1 */}

      <motion.section
        className="about"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image with fade + slide from left */}
        <motion.img
          src={gokartImg}
          alt="REEV"
          className="about-img"
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05, filter: "brightness(110%)" }}
        />

        {/* Text with fade + slide from right */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="font-black text-white ml-10 mb-6 tracking-wide font-mono uppercase relative inline-block text-5xl">
            REEV
            <motion.div
              className="about-underline absolute -bottom-1 left-0 h-[2px] w-full"
              style={{
                background: 'linear-gradient(to right, transparent, red, transparent)'
              }}
              variants={{
                visible: { scaleX: 0 },
                hovered: { scaleX: 1 },
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            />
          </h2>
          <motion.p
            className="leading-relaxed ml-10 text-gray-300 font-light text-lg lg:text-xl max-w-2xl"
            variants={fadeInUp}
          >
            "Resonance Racing is a Collegiate Motorsports club of AISSMS COE which provides an opportunity for students to pursue their passion for automobile engineering REEV team is a subsidiary of Resonance Racing which was started in 2021 with aim of competing in SAE Competition.
            Resonance Racing REEV highly backed by college administration, and experienced faculty advisers. Team consists of highly technical skilled members who together in unison manufactures state of the art Champion."
          </motion.p>
        </motion.div>
      </motion.section>
    </main>
  );
}

function Timeline() {
  const elementRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const events = [
    { season: "YEAR 2025-2026", details: "Omkar Tigote (CAPTAIN)", Events: "Reev 3rd Editior Dynamics AIR 1", image: "/M2.jpeg" },
    { season: "YEAR 2024-2025", details: "Kaushal More (CAPTAIN)", Events: "Reev 3rd Edition Virtual AIR 1 Virtuals", image: "/M1.jpeg" },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const startPoint = elementTop - viewportHeight;
      const endPoint = elementTop + elementHeight;
      const totalDistance = endPoint - startPoint;
      const currentProgress = scrollTop - startPoint;
      const scroll = Math.min(Math.max((currentProgress / totalDistance) * 100, 0), 100);
      setScrollPercent(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={elementRef} className="timeline-container">
      <div className="timeline-header-box ">
        <h2><b>2022 Club Inauguration</b></h2>
      </div>

      {/* The Vertical Line */}
      <div className="central-line">
        <motion.div 
          className="moving-ball" 
          style={{ top: `${scrollPercent}%` }} 
        />
      </div>

      <div className="events-wrapper">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`timeline-item ${isEven ? "left-item" : "right-item"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="timeline-content">
                <div className="text-box">
                  <h3 className="season-year">{event.season}</h3>
                  <p className="captain-name">{event.details}</p>
                  <h4 className="event-title">{event.Events}</h4>
                </div>
                
                <div className="image-box">
                  <img src={event.image} alt={event.season} className="timeline-img" />
                </div>
              </div>
              
              {/* Dot on the line for desktop */}
              <div className="timeline-dot"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
