import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Gokart.css";
import Footer from "../Footer/Footer.jsx";
import MultiCarousel from "../MoviesCarousel/MoviesCarousel.jsx";
import G1 from "../../assets/Gokart1.jpeg";
import img5 from "../../assets/image5.jpeg";
import img6 from "../../assets/image6.jpeg";
import img7 from "../../assets/image 7.jpeg";
import img8 from "../../assets/image 8.jpeg";
import img9 from "../../assets/image 9.jpeg";
import img10 from "../../assets/image 10.jpeg";
import img11 from "../../assets/image 11.jpeg";
import img12 from "../../assets/image 12.jpeg";
import img13 from "../../assets/image 13.jpeg";
import img14 from "../../assets/image 14.jpeg";


// Images
import img1 from "/season1.jpg";
import img2 from "/season 2.jpg";
import img3 from "/season3.png";
import img4 from "/Picture11.jpg";
const FecondCarouselData = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 },{img : img5},{img: img6},{img: img7},{img: img8},{img: img9},{img: img10},{img: img11},{img: img12},{img: img13},{img: img14}];

export default function GoKart() {
  return (
    <div className="gokart-container">
      <div className="flex-grow">
        <Anmol />
        <About />
        <MultiCarousel data={FecondCarouselData}/>
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
        <div className=" mx-auto px-4 pt-[20%] sm:pt-[15%] md:pt-[1%] pb-[12%] md:pb-[5%]">
          <div className="text-center relative">
            <div className="Jointe">
              <h2 className={`learn-mo-line ${animate ? "active" : ""}`}>
                <span className="section-heading">About Gokart</span>
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
          src={G1}
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
            Gokart
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
            The Resonance Racing Go-Kart Team, established in 2014, focuses on the design, development, and manufacturing of small, high-performance racing karts used in national-level karting championships. Go-karting serves as a fundamental entry point into motorsports, allowing students to gain hands-on experience in vehicle dynamics, fabrication, and race engineering. Supported by the college administration and guided by experienced faculty, the team includes both technical and non-technical members who collaborate to build competitive machines. This exposure helps students develop practical skills, teamwork, and industry knowledge, fostering strong foundations for careers in motorsports and automotive engineering.
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
    { season: "YEAR 2025-2026", details: "Omkar Tigote (CAPTAIN)", Events: "Morphines Motor Sports Series Season 1", image: "/t1.jpeg" },
    { season: "YEAR 2024-2025", details: "Ketan sonawane (CAPTAIN)", Events: "Edgeline Championship Season 2", image: "/season5.jpg" },
    { season: "YEAR 2023-2024", details: "Kaushal More (CAPTAIN)", Events: "Reev Virtual", image: "/season4.png" },
    { season: "YEAR 2022-2023", details: "Shubham Landage (CAPTAIN)", Events: "Reev Launch Year", image: "/season3.png" },
    { season: "YEAR 2019-2020", details: "Siddhesh Borse (Captain)", Events: "Indian Karting Championship", image: "/season 2.jpg" },
    { season: "YEAR 2018-2019", details: "Mukul Wadhokar (Captain)", image: "/season1.jpg" },
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
        <h2><b>2014 Club Inauguration</b></h2>
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