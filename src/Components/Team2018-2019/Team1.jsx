import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AnmolCarousel from "../../Components/Carousel/Carousel.jsx";
import "../../Components/Team2018-2019/Team1.css"
import Team1c from "./Team1c.jsx";
import Team1cm from "./Team1cm.jsx";
import Team1dm from "./Team1dm.jsx";
// Assets
import v1 from "../../assets/v1.jpg";

import v2 from "../../assets/Picture2.jpg";
import v3 from "../../assets/Alok Vishwakarma.jpg";
import v4 from "../../assets/Aadesh Mehta.jpg";
import v5 from "../../assets/Aditi Jadhav.jpg";
import v6 from "../../assets/Aditya Waghe.jpg";
import v7 from "../../assets/Kadambari Ovhal.jpg";
import v8 from "../../assets/Nandita Mophare.jpg";
import v9 from "../../assets/Sakshi Patil.jpg";
import v10 from "../../assets/Shivani Patankar.jpg";
import v11 from "../../assets/Sarthak Wankar.jpg";
import v12 from "../../assets/Pritviraj Kapale.jpg";
import v13 from "../../assets/Tanaya Otari.jpg";
import v14 from "../../assets/Vinit Raul.jpg";
import v15 from "../../assets/Harshvardhan Ghatge.jpg";
import v16 from "../../assets/Vihan Jange.jpg";
import v17 from "../../assets/Aayush Whaval.jpg";
import v18 from "../../assets/Onkar Padale.jpg";
import v19 from "../../assets/Prashant Mandora.jpg";
import v20 from "../../assets/Ketan Sonawane.jpg";
import v21 from "../../assets/Anurag Kedar.jpg";
import v22 from "../../assets/Shubham.jpg";
import v23 from "../../assets/Samarjeet.jpg";
import v24 from "../../assets/Kaushal.jpg";
import v25 from "../../assets/Suhani.jpg";
import v26 from "../../assets/Vishwajeet.jpg";
import v27 from "../../assets/Aayush.jpg";
import v28 from "../../assets/Sahil.jpg";
import v29 from "../../assets/Shreeyash.jpg";
import v30 from "../../assets/Manoj.jpg";
import v31 from "../../assets/Prathamesh.jpg";
import v32 from "../../assets/Tanaya.jpg";
import v33 from "../../assets/Ekta.jpg";
import v34 from "../../assets/Gaurang.jpg";

import MoviesCarousel from "../MoviesCarousel/MoviesCarousel.jsx";
import Footer from "../Footer/Footer.jsx";

const team20252026 = [


  {
    name: "Omkar Tigote",
    position: "(Team Captain)",
    image: v2,
    linkedin: "https://www.linkedin.com/in/omkar-tigote-a207892a8/",
    review: "Leading the team during the 2018-19 season was a journey of innovation and grit."
  },
  {
    name: "Tanaya Otari ",
    position: "(Vice Captain)",
    image: v13,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Onkar Padale  ",
    position: "(DRIVER)",
    image: v18,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle"
  },
  {
    name: "Alok Vishwakarma",
    position: "Design",
    image: v3,
    linkedin: "https://www.linkedin.com/in/darshak-kamani",
    review: "I have learned a lot about motorsports, manufacturing, machining, design and analysis software, team building, teamwork, etc."
  },
  {
    name: "Shreya Deshmukh",
    position: "Design",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "We focused on reducing the weight of the chassis while maintaining structural integrity."
  },
  {
    name: "Anurag Kedar",
    position: "Design",
    image: v21,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "The integration of our custom BMS was a breakthrough for the team's performance."
  },
  {
    name: "Sakshi Patil",
    position: "Design",
    image: v9,
    linkedin: "https://www.linkedin.com/in/priya-sharma",
    review: "I learned various technical skills and hands on experience"
  },
  {
    name: "Shivani Patankar",
    position: "Design",
    image: v10,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: " I learned practical engineering skills, teamwork, and how to work under competition pressure.This experience improved my technical knowledge and helped shape my career in the electric vehicle field."
  },
  {
    name: " Aditi Jadhav",
    position: "Design",
    image: v5,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "I learnt to make detailed research on everything so it is  improving my technical knowledge which is very useful for academics and future also .Also gained the skills like problem solving and how to work in team ."
  },

  {
    name: "Kadambari Ovhal",
    position: "Design",
    image: v7,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "I have learned a lot about motorsports, manufacturing, machining, design and analysis software, team building, teamwork, etc."
  },
  {
    name: "Aditya Waghe",
    position: "Design",
    image: v6,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "My experience is so good like I understand what real engineering is and also how to do research about new concepts. There is lots of learning in workshop which helps to build my personality even better."
  },
  {
    name: "Aadesh Mehta ",
    position: "Design",
    image: v4,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "My experience is so good like I understand what real engineering is and also how to do research about new concepts. There is lots of learning in workshop which helps to build my personality even better."
  },

  {
    name: "Nandita Mophare ",
    position: "Vehicle Dynamics",
    image: v8,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Sarthak Wankar",
    position: "Vehicle Dynamics",
    image: v11,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle"
  },
  {
    name: "Pritviraj Kapale ",
    position: "Vehicle Dynamics",
    image: v12,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Vinit Raul ",
    position: "Vehicle Dynamics",
    image: v14,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Prashant Mandora ",
    position: "M Powertrain",
    image: v19,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Ketan Sonawane ",
    position: "M Powertrain",
    image: v20,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Harshvardhan Ghatge ",
    position: "M Powertrain",
    image: v15,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Vihan Jange ",
    position: "M Powertrain",
    image: v16,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Aayush Whaval ",
    position: "M Powertrain",
    image: v17,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },

];
const team20232024 = [
  {
    name: "Aayush Dhokne",
    position: "(Captain)",
    image: v27,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Team helps me in my overall growth not just technical but non technical skills I gained in team helps me in my professional carrier."
  },
  {
    name: "Onkar Padale  ",
    position: "(DRIVER)",
    image: v18,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle"
  },

  {
    name: "Ketan Sonawane ",
    position: "M Powertrain",
    image: v20,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Prashant Mandora ",
    position: "M Powertrain",
    image: v19,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Prathamesh Malgude ",
    position: "Powertrain",
    image: v31,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "It was a tremendous experience working with the team — full of great memories from our workshops. The experience helped me develop strong team-building, leadership, and collaboration skills that have greatly shaped my career."
  },
  {
    name: "Tanaya Otari ",
    position: "Brakes",
    image: v13,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Tanaya Sabade",
    position: "Design",
    image: v32,
    linkedin: "https://www.linkedin.com/in/darshak-kamani",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },

  {
    name: "Ekta Patbhaje",
    position: "Powertrain",
    image: v33,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Joining Resonance Racing’s Go-kart & Reev team as a powertrain engineer was a hands-on adventure, taking me from learning to designing, simulating, fabricating, and rigorously testing all our “khurafati” ideas."
  },

  {
    name: "Manoj Gore",
    position: "Vehicle Dynamics",
    image: v30,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Being part of the Resonance Racing team is most transformative experiences of my engineering. It provided me with a deep, practical understanding of how theoretical vehicle dynamics translate into real-world performance."
  },

  {
    name: "Gaurang Gujarthi",
    position: "Brakes",
    image: v34,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },
  {
    name: "Vinit Raul ",
    position: "Vehicle Dynamics",
    image: v14,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },


];
const team20222023 = [
  {
    name: "Shubham Landage",
    position: "(CAPTAIN)",
    image: v22,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Being part of Resonance Racing was a transformative experience that strengthened technical skills while teaching leadership, teamwork, and perseverance. Through challenges and successes, problem-solving ability."
  },
  {
    name: "Samarjeet Aherrao",
    position: "(Vice Captain)",
    image: v23,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "It was the best. Designing and Building the Gokart taught me all the skills to become an automotive designer."
  },
  {
    name: "Kaushal More",
    position: "DESIGN",
    image: v24,
    linkedin: "https://www.linkedin.com/in/omkar-tigote-a207892a8/",
    review: "Being a part of Team Resonance was one of the best experiences during my college days. It gave me a real taste of teamwork, technical challenges, and management responsibilities. "
  },
  {
    name: "Vishwajeet Ghatage ",
    position: "Powertrain",
    image: v26,
    linkedin: "https://www.linkedin.com/in/aryan-malhotra",
    review: "It was a tremendous experience working with the team — full of great memories from our workshops. The experience helped me develop strong team-building, leadership, and collaboration skills that have greatly shaped my career."
  },
  {
    name: "Suhani Patil",
    position: "Design",
    image: v25,
    linkedin: "https://www.linkedin.com/in/darshak-kamani",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },
  {
    name: "Aayush Dhokne",
    position: "Powertrain",
    image: v27,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Team helps me in my overall growth not just technical but non technical skills I gained in team helps me in my professional carrier."
  },
  {
    name: "Sahil Pawar",
    position: "Powertrain",
    image: v28,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Joining Resonance Racing’s Go-kart & Reev team as a powertrain engineer was a hands-on adventure, taking me from learning to designing, simulating, fabricating, and rigorously testing all our “khurafati” ideas."
  },
  {
    name: "Shreeyash Chandgude",
    position: "Powertrain",
    image: v29,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Being a part of the Resonance Racing Club as a Powertrain Engineer. I actively participated in REEV and Go-Kart events, where I got the opportunity to apply my academic knowledge to real-world engineering challenges.  "
  },
  {
    name: "Manoj Gore",
    position: "Vehicle Dynamics",
    image: v30,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Being part of the Resonance Racing team is most transformative experiences of my engineering. It provided me with a deep, practical understanding of how theoretical vehicle dynamics translate into real-world performance."
  },
  {
    name: "Parag Dhamane",
    position: "Vehicle Dynamics",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Being part of the Resonance Racing Go-kart & REEV team as a member of the Steering and Vehicle Dynamics department was a highly enriching experience. It provided me with practical exposure to design, analysis, and teamwork beyond classroom learning."
  },
  {
    name: "Gaurang Gujarthi",
    position: "Brakes",
    image: 34,
    linkedin: "https://www.linkedin.com/in/sneha-patil",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },


];

const Team1 = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="w-full bg-[#101010] min-h-screen pt-20 lg:pt-24" style={{ position: 'relative', zIndex: 1 }}>
      {/* container  */}
      <section className="relative z-10">
        <div className=" mx-auto px-4 pt-[20%] sm:pt-[15%] md:pt-[10%] pb-[12%] md:pb-[5%]">
          <div className="text-center relative">
            <div className="Jointe">
              <h2 className={`learn-mo-line ${animate ? "active" : ""}`}>
                <span className="section-heading">Team Member</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <hr className="bg-black border-b border-red-500" />

      {/* container 1 */}
      <div className="mt-10 mb-16">
        <h2 className="section-heading"></h2>
        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                Team 2025-2026
              </span>
            </h2>


          </div>
          <div>
            <AnmolCarousel data={team20252026} />
          </div>

        </div>
        {/* container 2 */}
        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                Team 2023-2024
              </span>
            </h2>

          </div>
          <div>
            <AnmolCarousel data={team20232024} />
          </div>
        </div>
        {/* container 3*/}
        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                Team 2022-2023
              </span>
            </h2>

          </div>
          <div>
            <AnmolCarousel data={team20222023} />
          </div>

        </div>

      </div>
      <Footer />
    </main>
  );
};
export default Team1;
