import React, { useEffect, useRef, useState, Fragment } from "react";
import { GiStumpRegrowth } from "react-icons/gi";
import { BsFillPeopleFill, BsFillLaptopFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import { FaTools, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import TailwindSlideshow from "./Slideshow";
import Footer from "../../Components/Footer/Footer.jsx";
import go from "../../assets/Annn.jpg";
import ev from "../../assets/evev.jpeg";
import videoFile from "../../assets/Homev.mp4";
import r1 from "../../assets/darshak kamani.jpg";
import r2 from "../../assets/Bilal.jpg";
import r3 from "../../assets/Nikhil.jpg";
import r4 from "../../assets/Mahesh.jpg";
import r5 from "../../assets/Ashish.jpg";
import r6 from "../../assets/Aditya.jpg"; 
import r7 from "../../assets/About1.jpeg";
import n1 from "../../assets/Kaushal.jpg";
import n2 from "../../assets/Vishwajeet.jpg";
import n3 from "../../assets/Sahil.jpg";
import n4 from "../../assets/Shreeyash.jpg";
import n5 from "../../assets/Manoj.jpg";
import n6 from "../../assets/Shubham.jpg";
import n7 from "../../assets/Ketan Sonawane.jpg";
import n8 from "../../assets/Prashant Mandora.jpg";
import n9 from "../../assets/Tanaya.jpg";
import n10 from "../../assets/Onkar Padale.jpg";
import n11 from "../../assets/omkar.jpeg";
import n12 from "../../assets/Ajay.jpg";
import n13 from "../../assets/Parag.jpeg";

// Assets

import slideImg1 from "../../assets/Sponser1.png";
import slideImg2 from "../../assets/Sponser2.png";
import slideImg3 from "../../assets/Sponser3.png";
import slideImg4 from "../../assets/Sponser4.png";
import slideImg5 from "../../assets/Sponser5.png";
import slideImg6 from "../../assets/Sponser6.jpg";


// Splide imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Index() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const reviewsData = [
    {
      name: "DARSHAK KAMANI",
      position: "Driver and powertrain engineer",
      Dis: "Driver and powertrain engineerMy Experience with Resonance Racing Team Being a part of the Resonance Racing Team was one of the most defining experiences of my college life. The team taught me much more than just engineering — it taught me teamwork, discipline, problem-solving, and the importance of precision and innovation. Working on the design, manufacturing, and optimization of race car components gave me deep practical knowledge about engineering, engines, and manufacturing processes.Those long hours in the workshop, turning ideas into real mechanical systems, built a strong foundation for what I do today. The hands-on experience with tools, machines, and collaborative engineering directly helped me in starting and growing my own business in manufacturing and precision mold making.Resonance Racing was not just a team — it was a platform that shaped my technical mindset, leadership skills, and confidence to take on real-world challenges. I’ll always be grateful to the team and mentors for providing such a transformative learning environment that continues to drive my journey even today.",
      image: r1
    },
    {
      name: "Bilal Ali Shaikh",
      position: "Brakes & Marketing",
      Dis: "Being a part of my Resonance Racing go-kart team was one of the most defining experiences of my journey. It gave me vast exposure to multiple industries, helping me understand how different domains come together to make an engineering project successful. The experience helped me develop key skills such as teamwork, problem-solving, time management, and technical decision-making. Most importantly, it gave me a unique team bond and memories I’ll always cherish. This experience truly played a major role in shaping my career path..",
      image: r2
    },
    {
      name: "Nikhil Kotkar",
      position: "Design team",
      Dis: "Being part of the Team as a design member was a transformative experience that strengthened my technical expertise, teamwork, and problem-solving skills. Collaborating on real-world engineering challenges provided invaluable practical exposure and built the confidence that continues to shape my professional growth and career trajectory today.",
      image: r3
    },
    {
      name: "Mahesh Wagaskar",
      position: "Captain and steering department head",
      Dis: "Gokart (RR Team) has helped me to gain management experience and overall experience was very positive",
      image: r4
    },
    {
      name: "Ashish Lekhpal Thakur",
      position: "Powertrain",
      Dis: "My role as an engineering student was to solve the problem coming my way, and help the team thrive and win in every possible situation and this teamwork we had was something very special and it helps me till date and will continue to do so.",
      image: r5
    },
    {
      name: "Aditya Patil",
      position: "Powertrain Member",
      Dis: "Being a part of Team Resonance Racing was an experience like no other. The entire process of building the go-kart taught me far more than just engineering, it taught me how to work as a team, take ownership, and dedicate myself completely to a shared goal which is to learn, improve, and compete to win.Throughout the journey, I learned to handle real-world challenges like managing people, solving technical problems, and balancing time under pressure. But above all, the most valuable lesson was developing a “never give up” attitude. That mindset has stayed with me beyond college, in professional life, where ups and downs are inevitable, it reminds me to stay persistent, keep learning, and continue doing the things that truly matter.# Roar for RR",
      image: r6
    },
    {
      name: "Kaushal More",
      position: "Team Captain Batch 2023-2024",
      Dis:  "Being a part of Team Resonance was one of the best experiences during my college days. It gave me a real taste of teamwork, technical challenges, and management responsibilities. Working on projects and leading tasks helped me improve my problem-solving and communication skills, which have played a big role in shaping my career and confidence today.",
      image: n1
    },
    {
      name: "Vishwajeet Ghatage",
      position: "Mechanical Powertrain Head Batch 2022-2023",
      Dis: "It was a tremendous experience working with the team — full of great memories from our workshops. The experience helped me develop strong team-building, leadership, and collaboration skills that have greatly shaped my career.",
      image: n2
    },
    {
      name: "Sahil Pawar",
      position: "Mechanical Powertrain Member Batch 2022-2023",
      Dis: "Joining Resonance Racings Go-kart & Reev team as a powertrain engineer was a hands-on adventure, taking me from learning to designing, simulating, fabricating, and rigorously testing all our “khurafati” ideas. Working side by side with joyful and talented teammates shaped me into a better team player. Every late night spent tweaking designs or brainstorming new problems for our “perfect” solutions sparked creative, out-of-the-box thinking, and helped me grow as both a problem solver and an open-minded collaborator—always eager to make things better, together. As Dominic Toretto said, “I don’t have friends, I got family” in them.",
      image: n3
    },
    {
      name: "Shreeyash Chandgude",
      position: "Electrical Powertrain Batch 2022-2023",
      Dis: "Being a part of the Resonance Racing Club as a Powertrain Engineer was a transformative experience in my college life. I actively participated in REEV and Go-Kart events, where I got the opportunity to apply my academic knowledge to real-world engineering challenges. Coming from an electrical background, working on engines and motors deepened my understanding of mechanical and electrical integration in vehicles. The experience taught me the importance of consistency, determination, and teamwork — qualities that have greatly shaped my professional approach and continue to guide my career growth.",
      image: n4
    },
    {
      name: "Manoj Gore",
      position: "Vehicle Dynamics Head Batch 2023-2024",
      Dis: "Being part of the Resonance Racing team was one of the most transformative experiences of my engineering journey. It provided me with a deep, practical understanding of how theoretical vehicle dynamics translate into real-world performance. Working in a competitive and fast-paced environment taught me to think critically, analyze data effectively, and make engineering decisions under pressure.This experience not only enhanced my technical knowledge  but also shaped my career direction towards the rotating equipments industry.",
      image: n5
    },
    {
      name: "Shubham Landage",
      position: "Team Captain Batch 2022-20223",
      Dis: "Being part of Resonance Racing was one of the most defining chapters of my journey. While leading the team as a captain, it not only strengthened my technical foundation but also taught me what real-world leadership, collaboration, and perseverance mean. Every late night at the workshop, every failed test run, and every breakthrough shaped my mindset to think like an engineer and act like a leader.\nThe experience gave me a deep sense of ownership, problem-solving ability, and the confidence to take on challenges far beyond the racetrack. Today, as I work in the corporate world, I carry the same drive, discipline, and passion that Resonance Racing instilled in me and it always feels like I've got something extra in me because of this journey.\n#RR For Life  🏁",
      image: n6
    },
    {
      name: "Ketan Sonawane",
      position: "Team Captain Batch 2024-2025",
      Dis: "Being a part of Team Resonance Racing and leading it as a Captain and Powertrain Engineer was one of the most transformative phases of my journey. It not only strengthened my technical expertise but also enhanced my leadership, decision-making, and teamwork abilities. The challenges we faced and overcame together shaped me into a confident, disciplined, and goal-oriented individual who stands out in any situation.",
      image: n7 
    },
    {
      name: "Prashant Mandora",
      position: "Mechanical Powertrain Head Batch 2024-2025",
      Dis: "Being a part of Resonance Racing REEV & Go-Kart as Powertrain Head it was an incredible journey. It helped me build strong technical and leadership skills through real-world engineering challenges. Working with a passionate team taught me problem-solving, teamwork, and time management. This experience shaped my confidence and prepared me for my professional career. Every challenge became a learning experience, and every race proved our teamwork. Grateful to the team for their dedication, energy, and spirit that kept us pushing limits.Once a racer, always a racer — the journey doesn’t end, it inspires the next lap",
      image: n8
    },
    {
      name: "Tanaya Sabade",
      position: "Electrical Powertrain Member Batch 2024-2025",
      Dis: "Being part of Resonance Racing was one of the most impactful experiences of my college life. Working on real vehicle systems taught me how to think like an engineer — solving problems practically, managing time under pressure, and collaborating with a multidisciplinary team. It strengthened my technical understanding, boosted my confidence, and gave me valuable exposure to real-world engineering, which continues to guide my career path today.",
      image: n9
    },
    {
      name: "Onkar Padale",
      position: "Driver Batch 2024-2025",
      Dis: "Being part of Resonance Racing was one of the most impactful experiences of my college life. Working on real vehicle systems taught me how to think like an engineer — solving problems practically, managing time under pressure, and collaborating with a multidisciplinary team. It strengthened my technical understanding, boosted my confidence, and gave me valuable exposure to real-world engineering, which continues to guide my career path today. \n These achievements were possible because of the strong foundation built by our alumni. Their guidance, experience, and constant support have always been the backbone of the team. The standards they set and the knowledge they shared continue to inspire us to reach higher goals every season.\nThe exposure to real-world engineering problems helped me build a strong foundation for my career as a design engineer.",
      image: n10
    },
    {
      name: "Omkar Tigote",
      position: "Team Captain Batch 2025-2026",
      Dis: "Being the Team Captain of Resonance Racing GoKart and REEV during 2025–26 has been one of the most meaningful and unforgettable journeys of my life. I joined the workshop in my first year and dedicated four incredible years to this team, and in return, it gave me far more than I could have imagined. From strengthening my basic fundamentals to developing my engineering and technical skills, this team shaped me into the person I am today. Beyond academics and engineering, it taught me valuable life lessons and gave me a glimpse of the real world outside college. Resonance Racing became my second home, and the memories, struggles, achievements, and friendships I built here will always stay close to my heart. When I was appointed captain, the team had only three members, including myself. Today, as I hand over the responsibility, I leave behind a strong core team of 16 dedicated members, which is a matter of immense pride for me. I always believed in carrying the legacy forward, and I hope the same passion and spirit continue to drive this team to greater heights in every competition. Leaving this place will definitely give me FOMO, because this team has truly been the best part of my college life. Wishing Resonance Racing and REEV all the success for the future and hoping the team continues to roar louder than ever. \n#RoarForRR.",
      image: n11
    },
    {
      name: "Ajay Sawant",
      position: "Team Manager (Steering) Batch 2019-20",
      Dis: "Looking back, joining Resonance Racing was the single most important decision of my college career. As a member, my experience wasn't just about part of team it was a trial by fire that turned theory into reality.",
      image: n12
    },
    {
      name: "Parag Dhamane",
      position: "Vehicle Dyanmics Member Batch 2022-23",
      Dis: "Being part of the Resonance Racing Go-kart & REEV team as a member of the Steering and Vehicle Dynamics department was a highly enriching experience. It provided me with practical exposure to design, analysis, and teamwork beyond classroom learning.\nSecuring AIR 3 in the IKC was a proud achievement that strengthened my technical and problem-solving skills.\nThe experience greatly contributed to my professional growth and helped me in securing a position in my career.\n I Will be always greatful for this opportunity",
      image: n13
    },
  ];
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const whyJoinRef = useRef(null);
  const fleetRef = useRef(null);
  const reviewsRef = useRef(null);
  const sponsorsRef = useRef(null);
  const reeRef = useRef(null);
  const saeRef = useRef(null);
  const taeRef = useRef(null);


  const [isMobile, setIsMobile] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hovered: { scale: 1 }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);


  return (
    <main className={`w-full bg-[#101010] ${isMobile ? 'min-h-screen' : 'h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'}`}>
      {/* Hero Section */}
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className={`relative w-full flex items-center justify-center bg-black overflow-hidden ${isMobile ? 'min-h-[80vh]' : 'h-screen snap-start'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#101010] z-0"></div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-8xl font-bold italic text-red-600 font-mono mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            RESONANCE <span className="text-white">RACING</span>
          </motion.h1>

          <motion.h2
            className="text-lg md:text-3xl font-mono mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            TRANSFORMING WILL POWER INTO HORSEPOWER
          </motion.h2>

          {!isMobile && (
            <motion.a
              href="#about"
              className="text-red-600 font-mono text-lg hover:text-white transition-all duration-300 hover:scale-105"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll Down
            </motion.a>
          )}
        </div>
      </motion.section>
      {/* Spacer - removed to allow proper center snapping */}
      <div id="about" className={`${isMobile ? 'h-8' : 'h-0'}`}></div>

      {/* About Section */}
      {isMobile ? (
        <section
          ref={aboutRef}
          data-section="about"
          className="w-full mt-24 bg-[#101010] flex flex-col items-center justify-center py-8 px-4 gap-6"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-sm">
            <img
              alt="About REEV"
              className="w-full h-52 rounded-2xl object-cover"
              loading="lazy"
              src={r7}
            />
          </div>

          {/* Text */}
          <div className="text-center px-2">
            <h2 className="text-2xl font-bold text-white font-mono mb-4">
              About Team
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Resonance Racing is the collegiate motorsports club of AISSMS College of Engineering, providing students with a platform to explore their passion for automobile engineering. The team is supported by the college administration and guided by experienced faculty advisors.

It comprises two key divisions:

REEV Team (est. 2021): Focused on competing in SAE competitions, the team brings together skilled members dedicated to designing and building advanced electric vehicles.
Go-Kart Team (est. 2014): Competes in national-level karting championships, combining technical and non-technical expertise to manufacture high-performance go-kart vehicles.

Together, Resonance Racing fosters innovation, teamwork, and excellence in motorsports engineering
            </p>
          </div>
        </section>

      ) : (
        <motion.section
          ref={aboutRef}
          data-section="about"
          className="w-full bg-[#101010] flex flex-col items-center justify-center min-h-screen lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20 py-12 lg:py-20 snap-start"
          style={{ scrollSnapAlign: 'start' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover="hovered"
        >
          {/* Image Section */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer flex-1"
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              y: -4,
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/30 z-10 group-hover:from-black/40 transition-all duration-500"></div>
            <img
              alt="About REEV"
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              src={r7}
            />
          </motion.div>

          {/* About Section */}
          <motion.div
            className="flex-1 lg:text-left text-center"
            variants={fadeInUp}
          >
            <h2 className="font-black text-white mb-6 tracking-wide font-mono uppercase relative inline-block text-5xl">
              About Team
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
                variants={{
                  visible: { scaleX: 0 },
                  hovered: { scaleX: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </h2>
            <motion.p
              className="leading-relaxed text-gray-300 font-light text-lg lg:text-xl max-w-2xl"
              variants={fadeInUp}
            >
              "Resonance Racing is the collegiate motorsports club of AISSMS College of Engineering, providing students with a platform to explore their passion for automobile engineering. The team is supported by the college administration and guided by experienced faculty advisors.

It comprises two key divisions:

REEV Team (est. 2021): Focused on competing in SAE competitions, the team brings together skilled members dedicated to designing and building advanced electric vehicles.
Go-Kart Team (est. 2014): Competes in national-level karting championships, combining technical and non-technical expertise to manufacture high-performance go-kart vehicles.

Together, Resonance Racing fosters innovation, teamwork, and excellence in motorsports engineering"
            </motion.p>
          </motion.div>
        </motion.section>
      )}

      {/* Why Join Us Section */}
      {isMobile ? (
        <section
          ref={whyJoinRef}
          data-section="whyJoin"
          className="w-full bg-[#101010] mt-24 flex flex-col justify-start py-8"
        >
          <div className="text-center group cursor-pointer mb-6">
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-2xl mt-4">
              Why Join Us?
              <div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
              />
            </h2>
          </div>

          <div className="grid gap-4 px-4">
            {[
              {
                title: "Innovation",
                description: "Work on cutting-edge electric vehicle technology and sustainable transportation solutions.",
                symbol: <TbBulbFilled className="size-8 fill-black" />
              },
              {
                title: "Skill Development",
                description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
                symbol: <FaTools className="size-8 fill-black" />
              },
              {
                title: "Hands-On Experience",
                description: "Get hands-on experience in automotive technology, motorsports, and sustainable engineering.",
                symbol: <FaHandsHelping className="size-8 fill-black" />
              },
              {
                title: "Learn New Softwares",
                description: "Learn new softwares and tools to enhance your skills.",
                symbol: <BsFillLaptopFill className="size-8 fill-black" />
              },
              {
                title: "Collaboration",
                description: "Join a passionate team of engineers and developers working towards a greener future.",
                symbol: <BsFillPeopleFill className="size-8 fill-black" />
              },
              {
                title: "Growth",
                description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
                symbol: <GiStumpRegrowth className="size-8 fill-black" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm col-span-1 rounded-lg border border-red-600/20 group cursor-pointer grid h-auto p-4 mb-3 min-h-[14rem]"
              >
                <div className="justify-self-center grid bg-red-500 items-center justify-items-center rounded-full w-16 h-16 mt-4">
                  {item.symbol}
                </div>
                <h4 className="font-bold text-red-600 font-mono justify-self-center text-lg mb-3 mt-3">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <motion.section
          ref={whyJoinRef}
          data-section="whyJoin"
          className="w-full bg-[#101010] flex flex-col justify-start min-h-screen pt-24 pb-20 snap-start"
          style={{ scrollSnapAlign: 'start' }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          whileHover="hovered"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="text-center group cursor-pointer mb-16"
            variants={fadeInUp}
          >
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-5xl mt-24">
              Why Join Us?
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                variants={{
                  visible: { scaleX: 0 },
                  hovered: { scaleX: 1 },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-[3rem] sm:px-6 lg:px-[17rem]"
            variants={fadeInUp}
          >
            {[
              {
                title: "Innovation",
                description: "Work on cutting-edge electric vehicle technology and sustainable transportation solutions.",
                symbol: <TbBulbFilled className="size-10 fill-black" />
              },
              {
                title: "Skill Development",
                description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
                symbol: <FaTools className="size-10 fill-black" />
              },
              {
                title: "Hands-On Experience",
                description: "Get hands-on experience in automotive technology, motorsports, and sustainable engineering.",
                symbol: <FaHandsHelping className="size-10 fill-black" />
              },
              {
                title: "Learn New Softwares",
                description: "Learn new softwares and tools to enhance your skills.",
                symbol: <BsFillLaptopFill className="size-10 fill-black" />
              },
              {
                title: "Collaboration",
                description: "Join a passionate team of engineers and developers working towards a greener future.",
                symbol: <BsFillPeopleFill className="size-10 fill-black" />
              },
              {
                title: "Growth",
                description: "Develop your skills in automotive technology, motorsports, and sustainable engineering.",
                symbol: <GiStumpRegrowth className="size-10 fill-black" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm col-span-1 rounded-lg border border-red-600/20 group cursor-pointer grid h-auto p-4 sm:p-6 mb-6 lg:mb-[3rem] min-h-[18rem] sm:h-[20rem] md:h-[25rem]"
                whileHover="hover-card"
                initial="rest"
                animate="rest"
                variants={{
                  "hover-card": {
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)",
                    borderColor: "rgba(220, 38, 38, 0.4)",
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  },
                  rest: {
                    scale: 1,
                    y: 0,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    borderColor: "rgba(220, 38, 38, 0.2)",
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
              >
                <motion.div className="justify-self-center grid bg-red-500 items-center justify-items-center rounded-full w-20 h-20 mt-[1.5rem]"
                  variants={{
                    rest: {
                      scale: 1,
                      rotate: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    },
                    "hover-card": {
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }
                  }}
                >
                  {React.cloneElement(item.symbol, {
                    className: "size-10 fill-black"
                  })}
                </motion.div>
                <h4 className="font-bold text-red-600 font-mono justify-self-center text-2xl mb-6 mt-[1rem]">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Fleet Showcase Section */}
      {isMobile ? (
        <section
          ref={fleetRef}
          data-section="fleet"
          className="w-full bg-[#101010] flex flex-col justify-start pt-8 pb-20 sm:pt-16 sm:pb-28 lg:min-h-screen snap-start"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="w-full">
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-12">
              <h2 className="font-black text-white tracking-wide font-mono uppercase relative inline-block text-2xl sm:text-5xl">
                OUR FLEET
                <div
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{ background: 'linear-gradient(to right, transparent, red, transparent)' }}
                />
              </h2>
            </div>

            {/* Fleet Grid */}
            <div className="max-w-7xl pt-8 mx-auto w-[90%] xl:w-[80%] grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Vehicle Card Example */}
              <div className="vehicle-card">
                <div className="header">
                  <h3>
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      About{" "}
                    </span>
                    Reev
                  </h3>
                </div>
                <div className="card-content">
                  <div className="card-image">
                    <img src={ev} alt="REEV" className="w-full h-auto rounded-lg" />
                  </div>
                  <div className="card-header">
                    <span className="card-subtitle text-white text-sm sm:text-base"></span>
                  </div>
                  <p className="text-white font-light text-sm sm:text-lg leading-relaxed">
                    The Resonance Racing Go-Kart Team, established in 2014, focuses on the design, development, and manufacturing of small, high-performance racing karts used in national-level karting championships. Go-karting serves as a fundamental entry point into motorsports, allowing students to gain hands-on experience in vehicle dynamics, fabrication, and race engineering. Supported by the college administration and guided by experienced faculty, the team includes both technical and non-technical members who collaborate to build competitive machines. This exposure helps students develop practical skills, teamwork, and industry knowledge, fostering strong foundations for careers in motorsports and automotive engineering.
                  </p>
                  <button className="vehicle-cta mt-2 sm:mt-4">
                    <span className="text-red-500 font-cursive text-sm sm:text-base">Learn More</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>

              <div className="vehicle-card">
                <div className="header">
                  <h3>
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      About{" "}
                    </span>
                    Gokart
                  </h3>
                </div>
                <div className="card-content">
                  <div className="card-image">
                    <img src={go} alt="REEV" className="w-full h-auto rounded-lg" />
                  </div>
                  <div className="card-header">
                    <span className="card-subtitle text-white text-sm sm:text-base"></span>
                  </div>
                  <p className="text-white font-light text-sm sm:text-lg leading-relaxed">
                                        The Resonance Racing Go-Kart Team, established in 2014, focuses on the design, development, and manufacturing of small, high-performance racing karts used in national-level karting championships. Go-karting serves as a fundamental entry point into motorsports, allowing students to gain hands-on experience in vehicle dynamics, fabrication, and race engineering. Supported by the college administration and guided by experienced faculty, the team includes both technical and non-technical members who collaborate to build competitive machines. This exposure helps students develop practical skills, teamwork, and industry knowledge, fostering strong foundations for careers in motorsports and automotive engineering.<br></br><br></br><br></br>

                  </p>
                  <button className="vehicle-cta mt-2 sm:mt-4">
                    <span className="text-red-500 font-cursive text-sm sm:text-base">Learn More</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>

              {/* Repeat Vehicle Cards */}
            </div>
          </div>
        </section>
      ) : (
        <motion.section
          ref={fleetRef}
          data-section="fleet"
          className="w-full bg-[#101010] flex flex-col justify-start min-h-screen pt-36 pb-20 snap-start"
          style={{ scrollSnapAlign: 'start' }}
          initial="hidden"
          animate={undefined}
          whileHover="hovered"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full">
            {/* Section Header */}
            <motion.div
              className="text-center group cursor-pointer mb-16"
              variants={fadeInUp}
            >
              <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-5xl">
                OUR FLEET
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{
                    background: 'linear-gradient(to right, transparent, red, transparent)'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1 }}
                  variants={{
                    visible: { scaleX: 0 },
                    hovered: { scaleX: 1 },
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                />
              </h2>
            </motion.div>
          </div>

          {/* Fleet Grid */}
          <div className="max-w-7xl mx-auto w-[90%] xl:w-[80%]">
            <div className="vehicles-grid">
              {/* Vehicle Card 1 */}
              <div className="vehicle-card reev-card active">
                <div className="header">
                  <h3>
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      About{" "}
                    </span>
                    Reev
                  </h3>
                </div>
                <div className="card-content">
                  <div className="card-image">
                    <img
                      src={ev}
                      alt="REEV"
                    />
                  </div>
                  <div className="card-header">
                    <br></br>
                    <span className="card-subtitle"></span>
                  </div>
                  <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
                    The Resonance Racing REEV (Range Extended Electric Vehicle) Team, founded in 2021, is dedicated to designing and building energy-efficient electric vehicles for SAE competitions. REEVs combine electric propulsion with range-extending technologies, making them a crucial innovation in sustainable mobility. The team provides students with in-depth experience in electric powertrains, battery management systems, and advanced automotive technologies. With strong institutional support and faculty mentorship, members work together to create cutting-edge vehicles while gaining industry-relevant skills. This experience equips students with the expertise and confidence needed to pursue careers in motorsports, electric mobility, and the evolving automotive sector.<br></br><br></br><br></br>
                  </p>
                  <Link to="/Reev">
                    <button className="vehicle-cta">
                      <span
                        className="about-reev-heading"
                        style={{
                          fontFamily: "cursive",
                          color: "red",
                          fontSize: "19px",
                        }}
                      >
                        Learn More{" "}
                      </span>{" "}
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Vehicle Card 2 */}
              <div className="vehicle-card reev-card active">
                <div className="header">
                  <h3>
                    <span
                      style={{
                        fontFamily: "cursive",
                        color: "red",
                      }}
                    >
                      About{" "}
                    </span>{" "}
                    GoKart
                  </h3>
                </div>
                <div className="card-content">
                  <div className="card-image">
                    <img
                      src={go}
                      alt="GoKart"
                    />
                  </div>
                  <div className="card-header">
                    <br></br>
                    <span className="card-subtitle"></span>
                  </div>
                  <p className="text-lg lg:text-xl leading-relaxed text-white font-light max-w-2xl">
                                        The Resonance Racing Go-Kart Team, established in 2014, focuses on the design, development, and manufacturing of small, high-performance racing karts used in national-level karting championships. Go-karting serves as a fundamental entry point into motorsports, allowing students to gain hands-on experience in vehicle dynamics, fabrication, and race engineering. Supported by the college administration and guided by experienced faculty, the team includes both technical and non-technical members who collaborate to build competitive machines. This exposure helps students develop practical skills, teamwork, and industry knowledge, fostering strong foundations for careers in motorsports and automotive engineering.<br></br><br></br><br></br>


                  </p>
                  <Link to="/Gokart">
                    <button className="vehicle-cta">
                      <span
                        className="about-reev-heading"
                        style={{
                          fontFamily: "cursive",
                          color: "red",
                          fontSize: "19px",
                        }}
                      >
                        Learn More{" "}
                      </span>{" "}
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Review Section */}
      {/* Reviews Section */}
      {isMobile ? (

        <section
          ref={reviewsRef}
          data-section="reviews"
          className="w-full bg-[#101010] mt-24 flex flex-col justify-start py-8 relative"
        >
          <div className="text-center group cursor-pointer mb-6">
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-2xl">
              Reviews
              <div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
              />
            </h2>
          </div>

          {/* Review Carousel */}
          <div className="w-full px-4">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white/30',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600',
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              className="review-swiper !pb-12"
            >
              {reviewsData.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <div className="bg-white/10 rounded-xl p-8 border-2 border-red-600/20 hover:border-red-600 transition w-full max-w-2xl">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-red-600"
                        />
                        <h3 className="text-xl font-bold text-white mb-2 font-mono">
                          {review.name}
                        </h3>
                        <p className="text-red-600 text-sm mb-4 font-medium">
                          {review.position}
                        </p>
                        

                        {/* ✅ FIXED BUTTON */}
                        <button
                          onClick={() => {
                            setSelectedReview(review);
                            setShowReviewModal(true);
                          }}
                          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        >
                          View Review
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev !text-white"></div>
              <div className="swiper-button-next !text-white"></div>
            </Swiper>
          </div>
          {showReviewModal && selectedReview && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative text-center">



                <img
                  src={selectedReview.image}
                  alt={selectedReview.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />

                <h2 className="text-xl font-bold text-black">
                  {selectedReview.name}
                </h2>

                <p className="text-red-600 text-sm mb-3">
                  {selectedReview.position}
                </p>

                <p className="text-gray-700">
                  "{selectedReview.Dis}"
                </p>
                <button
                  onClick={() => {
                    setShowReviewModal(false);
                    setSelectedReview(null);
                  }}
                  className="mt-4 px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-semibold"
                >
                  Close Review
                </button>
              </div>
            </div>
          )}
        </section>
      ) : (
        <motion.section
          ref={reviewsRef}
          data-section="reviews"
          className="w-full bg-[#101010] flex flex-col justify-start min-h-screen pt-36 pb-20 snap-start relative"
          style={{ scrollSnapAlign: 'start' }}
        >
          <motion.div className="text-center mb-16">
            <h2 className="font-black text-white text-5xl">Reviews</h2>
          </motion.div>

          <div className="w-full px-8">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 5000 }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {reviewsData.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <div className="bg-white/10 rounded-xl w-[27rem] h-[24rem] p-8 border-2 border-red-600/20 hover:border-red-600 transition">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-red-600"
                        />
                        <h3 className="text-xl font-bold text-white mb-2 font-mono">
                          {review.name}
                        </h3>
                        <p className="text-red-600 text-sm mb-4 font-medium">
                          {review.position}
                        </p>
                        

                        {/* ✅ BUTTON */}
                        <button
                          onClick={() => {
                            setSelectedReview(review);
                            setShowReviewModal(true);
                          }}
                          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        >
                          View Review
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev !text-white"></div>
              <div className="swiper-button-next !text-white"></div>
            </Swiper>
          </div>
          {showReviewModal && selectedReview && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
              <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative text-center">



                <img
                  src={selectedReview.image}
                  alt={selectedReview.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />

                <h2 className="text-xl font-bold text-black">
                  {selectedReview.name}
                </h2>

                <p className="text-red-600 text-sm mb-3">
                  {selectedReview.position}
                </p>

                <p className="text-gray-700">
                  "{selectedReview.Dis}"
                </p>

                <button
                  onClick={() => {
                    setShowReviewModal(false);
                    setSelectedReview(null);
                  }}
                  className="mt-4 px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-semibold"
                >
                  Close Review
                </button>
              </div>
            </div>
          )}
        </motion.section>
      )}

      {/* ✅ MODAL */}


      {/* ✅ Reviews Data */}

      {/* Sponsors & Footer Section */}
      {isMobile ? (
        <section
          ref={sponsorsRef}
          data-section="sponsors"
          className="w-full bg-[#101010] mt-24 flex flex-col p-0 justify-start"
        >
          {/* Sponsors Content */}
          <div className="text-center group cursor-pointer mb-6">
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-2xl">
              Sponsors
              <div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
              />
            </h2>
          </div>

          {/* Animated Marquee */}
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-marquee">
              {/* First set of sponsors */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={index}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}

              {/* Second set for seamless loop - exact duplicate */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={`dup-${index}`}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}

              {/* Third set for extra smoothness */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={`third-${index}`}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <motion.section
          ref={sponsorsRef}
          data-section="sponsors"
          className="w-full bg-[#101010] flex flex-col min-h-screen pt-36 justify-between snap-start"
          style={{ scrollSnapAlign: 'start' }}
          initial="hidden"
          animate={undefined}
          whileInView="visible"
          whileHover="hovered"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Sponsors Content */}
          <motion.div
            className="text-center group cursor-pointer mb-16"
            variants={fadeInUp}
          >
            <h2 className="font-black text-white mb-4 tracking-wide font-mono uppercase relative inline-block text-5xl">
              Sponsors
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] w-full"
                style={{
                  background: 'linear-gradient(to right, transparent, red, transparent)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                variants={{
                  visible: { scaleX: 0 },
                  hovered: { scaleX: 1 },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              />
            </h2>
          </motion.div>

          {/* Animated Marquee */}
          <motion.div
            className="w-full overflow-hidden"
            variants={fadeInUp}
          >
            <div className="flex w-max animate-marquee">
              {/* First set of sponsors */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={index}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}

              {/* Second set for seamless loop - exact duplicate */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={`dup-${index}`}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}

              {/* Third set for extra smoothness */}
              {[
                { Icon: slideImg1, name: "Asset 13", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[10rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg2, name: "Dynamic Lazer", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg3, name: "Poweron", class: "w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg5, name: "Ansys", class: "w-[8rem] h-[8rem] md:w-[12rem] md:h-[8rem] mx-[4rem] md:mx-[6rem] invert" },
                { Icon: slideImg6, name: "Kapras Automation", class: "w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] mx-[4rem] md:mx-[6rem]" },
                { Icon: slideImg4, name: "Rafftar logo", class: "w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] mx-[4rem] md:mx-[6rem]" },
              ].map((item, index) => (
                <img
                  key={`third-${index}`}
                  src={item.Icon}
                  alt={item.name}
                  draggable="false"
                  className={`${item.class} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                />
              ))}
            </div>
          </motion.div>

          {/* Footer Content Integrated */}
          <motion.footer
            className="bg-black w-full text-white px-[8%] lg:px-[12%] pt-1 mt-auto grid items-center py-[1rem] font-mono"
          >
            <Footer />
          </motion.footer>
        </motion.section>
      )}

      {isMobile && (
        <Footer />
      )}
    </main>
  );
}

