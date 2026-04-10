import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AnmolCarousel from "../../Components/Carousel/Carousel.jsx";
import "../../Components/Team2018-2019/Team1.css"
import M3 from "../../assets/Sanika.jpeg";
import M4 from "../../assets/Anmol.png";
// Assets
import v1 from "../../assets/v1.jpg";
import { FaLinkedin } from "react-icons/fa";  
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
 import v36 from "../../assets/ar.jpeg";
 import v37 from "../../assets/su.jpeg";
 import v38 from "../../assets/sp.png";
import MoviesCarousel from "../MoviesCarousel/MoviesCarousel.jsx";
import Footer from "../Footer/Footer.jsx";
const teamdevloper = [
  {
    name: "Anmol Gour",
    position: "Web Developer(Computer Science)",
    image: M4,
    linkedin: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
    review: "Lead the design and development of the official website for Resonance Racing REEV, focusing on modern UI/UX, responsiveness, and performance optimization.Managed core development, website architecture, and deployment, ensuring a seamless and engaging user experience across all devices."
  },
  {
    name: "Sanika Thorat",
    position: "Web Developer(Computer Science)",
    image: M3,
    linkedin: "https://www.linkedin.com/in/sanika-thorat-07b114287/",
    review: "Assisted in the development of the official website by contributing to UI implementation, content structuring, and testing.Supported in improving responsiveness and maintaining consistency across different sections of the website."
  },

]

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
    linkedin: "https://www.linkedin.com/in/tanaya-otari-760606290?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Onkar Padale  ",
    position: "(DRIVER)",
    image: v18,
    linkedin: "https://www.linkedin.com/in/onkar-padale-873291223?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle"
  },
  {
    name: "Alok Vishwakarma",
    position: "Design",
    image: v3,
    linkedin: "https://www.linkedin.com/in/alok-kumar-vishwakarma-521062254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    review: "I have learned a lot about motorsports, manufacturing, machining, design and analysis software, team building, teamwork, etc."
  },
  {
    name: "Shreya Deshmukh",
    position: "Design",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/shreya-deshmukh-377545384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: "We focused on reducing the weight of the chassis while maintaining structural integrity."
  },
  {
    name: "Anurag Kedar",
    position: "Design",
    image: v21,
    linkedin: "https://www.linkedin.com/in/anurag-kedar-0502461b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "The integration of our custom BMS was a breakthrough for the team's performance."
  },
  {
    name: "Sakshi Patil",
    position: "Electrical Powertrain",
    image: v9,
    linkedin: "https://www.linkedin.com/in/sakshi-patil-886141378?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "I learned various technical skills and hands on experience"
  },
  {
    name: "Shivani Patankar",
    position: "Electrical Powertrain",
    image: v10,
    linkedin: "https://www.linkedin.com/in/shivani-patankar-4b2273378?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: " I learned practical engineering skills, teamwork, and how to work under competition pressure.This experience improved my technical knowledge and helped shape my career in the electric vehicle field."
  },
  {
    name: " Aditi Jadhav",
    position: "Electrical Powertrain",
    image: v5,
    linkedin: "https://www.linkedin.com/in/aditi-jadhav-458065375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: "I learnt to make detailed research on everything so it is  improving my technical knowledge which is very useful for academics and future also .Also gained the skills like problem solving and how to work in team ."
  },

  {
    name: "Kadambari Ovhal",
    position: "Electrical Powertrain",
    image: v7,
    linkedin: "https://www.linkedin.com/in/kadambari-ovhal-8b99a82aa?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "I have learned a lot about motorsports, manufacturing, machining, design and analysis software, team building, teamwork, etc."
  },
  {
    name: "Aditya Waghe",
    position: "Electrical Powertrain",
    image: v6,
    linkedin: "https://www.linkedin.com/in/aditya-waghe-63514b384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: "My experience is so good like I understand what real engineering is and also how to do research about new concepts. There is lots of learning in workshop which helps to build my personality even better."
  },
  {
    name: "Aadesh Mehta ",
    position: "Electrical Powertrain",
    image: v36,
    linkedin: "https://www.linkedin.com/in/aadesh-mehta-91aa08342?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: "My experience is so good like I understand what real engineering is and also how to do research about new concepts. There is lots of learning in workshop which helps to build my personality even better."
  },
  {
    name: "Sureshkumar Ravindra Kagne ",
    position: "Electrical Powertrain",
    image: v37,
    linkedin: "#",
    review: "My experience is so good like I understand what real engineering is and also how to do research about new concepts. There is lots of learning in workshop which helps to build my personality even better."
  },
  {
    name: "SPANDAN SACHIN INGAWALE ",
    position: "Electrical Powertrain",
    image: v38,
    linkedin: "https://www.linkedin.com/in/spandan-ingawale-8794a9395?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: "My experience is so good like I understand what real engineering is and also how to do research about new concepts. There is lots of learning in workshop which helps to build my personality even better."
  },

  {
    name: "Nandita Mophare ",
    position: "Vehicle Dynamics",
    image: v8,
    linkedin: "https://www.linkedin.com/in/nandita-mophare-187a6a383?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },

  {
    name: "Pruthviraj Khapale ",
    position: "Vehicle Dynamics",
    image: v12,
    linkedin: "#",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },

  {
    name: "Prashant Mandora ",
    position: "M Powertrain",
    image: v19,
    linkedin: "#",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Ketan Sonawane ",
    position: "M Powertrain",
    image: v20,
    linkedin: "https://www.linkedin.com/in/ketan-sonawane-774706285?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Harshvardhan Ghatge ",
    position: "M Powertrain",
    image: v15,
    linkedin: "https://www.linkedin.com/in/harsvhardhan-ghatge-935423350?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Vihan Jange ",
    position: "M Powertrain",
    image: v16,
    linkedin: "https://www.linkedin.com/in/vihan-jange-b736a4383?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Aayush Whaval ",
    position: "M Powertrain",
    image: v17,
    linkedin: "https://www.linkedin.com/in/aayush-whawal-6aa06b384?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Vinit Raul ",
    position: "Brakes",
    image: v14,
    linkedin: "https://www.linkedin.com/in/vinit-raul-7b0243258?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Arnav Shinde ",
    position: "Brakes",
    image: v4,
    linkedin: "https://www.linkedin.com/in/arnav-shinde-38011a385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },

];

const team20242025 = [
  {
    name: "Ketan Sonawane ",
    position: "(Team Captain)",
    image: v20,
    linkedin: "https://www.linkedin.com/in/ketan-sonawane-774706285?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Tanaya Otari ",
    position: "(Vice Captain)",
    image: v13,
    linkedin: "https://www.linkedin.com/in/tanaya-otari-760606290?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Onkar Padale  ",
    position: "(DRIVER)",
    image: v18,
    linkedin: "https://www.linkedin.com/in/onkar-padale-873291223?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle"
  },
  {
    name: "Ekta Patbhaje",
    position: "Electrical Powertrain",
    image: v33,
    linkedin: "https://www.linkedin.com/in/ekta-patbhaje-b43050291?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Joining Resonance Racing’s Go-kart & Reev team as a powertrain engineer was a hands-on adventure, taking me from learning to designing, simulating, fabricating, and rigorously testing all our “khurafati” ideas."
  },
  {
    name: "Tanaya Sabade",
    position: "Electrical Powertrain",
    image: v32,
    linkedin: "https://www.linkedin.com/in/tanaya-sabade-360029291?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },
  {
    name: "Prathamesh Malgude ",
    position: "Electrical Powertrain",
    image: v31,
    linkedin: "#",
    review: "It was a tremendous experience working with the team — full of great memories from our workshops. The experience helped me develop strong team-building, leadership, and collaboration skills that have greatly shaped my career."
  },
  {
    name: "Prashant Mandora ",
    position: "M Powertrain",
    image: v19,
    linkedin: "#",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Omkar Tigote",
    position: "Design",
    image: v2,
    linkedin: "https://www.linkedin.com/in/omkar-tigote-a207892a8/",
    review: "Leading the team during the 2018-19 season was a journey of innovation and grit."
  },
  {
    name: "Anurag Kedar",
    position: "Design",
    image: v21,
    linkedin: "https://www.linkedin.com/in/anurag-kedar-0502461b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "The integration of our custom BMS was a breakthrough for the team's performance."
  },

  {
    name: "Vinit Raul ",
    position: "Brakes",
    image: v14,
    linkedin: "https://www.linkedin.com/in/vinit-raul-7b0243258?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },




];

const team20232024 = [
  {
    name: "Kaushal More ",
    position: "(CAPTAIN)",
    image: v24,
    linkedin: "https://www.linkedin.com/in/kaushal-more-a36446224?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Aayush Dhokne",
    position: "(Vice Captain)/(Driver)",
    image: v27,
    linkedin: "https://www.linkedin.com/in/aayush-dhokne-65b47a213?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Team helps me in my overall growth not just technical but non technical skills I gained in team helps me in my professional carrier."
  },
  {
    name: "Onkar Padale  ",
    position: "Vehicle Dynamics",
    image: v18,
    linkedin: "https://www.linkedin.com/in/onkar-padale-873291223?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle"
  },

  {
    name: "Ketan Sonawane ",
    position: "M Powertrain",
    image: v20,
    linkedin: "https://www.linkedin.com/in/ketan-sonawane-774706285?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Prashant Mandora ",
    position: "M Powertrain",
    image: v19,
    linkedin: "#",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Prathamesh Malgude ",
    position: "Electrical Powertrain",
    image: v31,
    linkedin: "#",
    review: "It was a tremendous experience working with the team — full of great memories from our workshops. The experience helped me develop strong team-building, leadership, and collaboration skills that have greatly shaped my career."
  },
  {
    name: "Tanaya Sabade",
    position: "Electrical Powertrain",
    image: v32,
    linkedin: "https://www.linkedin.com/in/tanaya-sabade-360029291?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },


  {
    name: "Ekta Patbhaje",
    position: "Electrical Powertrain",
    image: v33,
    linkedin: "https://www.linkedin.com/in/ekta-patbhaje-b43050291?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Joining Resonance Racing’s Go-kart & Reev team as a powertrain engineer was a hands-on adventure, taking me from learning to designing, simulating, fabricating, and rigorously testing all our “khurafati” ideas."
  },
  {
    name: "Manoj Gore",
    position: "Vehicle Dynamics",
    image: v30,
    linkedin: "https://www.linkedin.com/in/manoj-gore-674907268?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the Resonance Racing team is most transformative experiences of my engineering. It provided me with a deep, practical understanding of how theoretical vehicle dynamics translate into real-world performance."
  },
  {
    name: "Tanaya Otari ",
    position: "Brakes",
    image: v13,
    linkedin: "https://www.linkedin.com/in/tanaya-otari-760606290?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },



  {
    name: "Gaurang Gujarthi",
    position: "Brakes",
    image: v34,
    linkedin: "https://www.linkedin.com/in/gaurang-gujarathi-ba7375206?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },
  {
    name: "Vinit Raul ",
    position: "Brakes",
    image: v14,
    linkedin: "https://www.linkedin.com/in/vinit-raul-7b0243258?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Experience in team is Good Gaining Knowledge and experience about working on vehicle "
  },
  {
    name: "Suhani Patil",
    position: "Design",
    image: v25,
    linkedin: "https://www.linkedin.com/in/suhani-patil-110208225?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },
  {
    name: "Omkar Tigote",
    position: "Design",
    image: v2,
    linkedin: "https://www.linkedin.com/in/omkar-tigote-a207892a8/",
    review: "Leading the team during the 2018-19 season was a journey of innovation and grit."
  },
  {
    name: "Anurag Kedar",
    position: "Design",
    image: v21,
    linkedin: "https://www.linkedin.com/in/anurag-kedar-0502461b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "The integration of our custom BMS was a breakthrough for the team's performance."
  },


];
const team20222023 = [
  {
    name: "Shubham Landage",
    position: "(CAPTAIN)",
    image: v22,
    linkedin: "https://www.linkedin.com/in/shubham-landage-96b8711b3?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of Resonance Racing was a transformative experience that strengthened technical skills while teaching leadership, teamwork, and perseverance. Through challenges and successes, problem-solving ability."
  },
  {
    name: "Samarjeet Aherrao",
    position: "(Vice Captain)",
    image: v23,
    linkedin: "https://www.linkedin.com/in/samarjeet-aherrao?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "It was the best. Designing and Building the Gokart taught me all the skills to become an automotive designer."
  },
  {
    name: "Kaushal More",
    position: "Design",
    image: v24,
    linkedin: "https://www.linkedin.com/in/kaushal-more-a36446224?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being a part of Team Resonance was one of the best experiences during my college days. It gave me a real taste of teamwork, technical challenges, and management responsibilities. "
  },
  {
    name: "Suhani Patil",
    position: "Design",
    image: v25,
    linkedin: "https://www.linkedin.com/in/suhani-patil-110208225?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },
  {
    name: "Vishwajeet Ghatage ",
    position: "Powertrain",
    image: v26,
    linkedin: "https://www.linkedin.com/in/vishvajeet-ghatage?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "It was a tremendous experience working with the team — full of great memories from our workshops. The experience helped me develop strong team-building, leadership, and collaboration skills that have greatly shaped my career."
  },

  {
    name: "Aayush Dhokne",
    position: "Powertrain",
    image: v27,
    linkedin: "https://www.linkedin.com/in/aayush-dhokne-65b47a213?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Team helps me in my overall growth not just technical but non technical skills I gained in team helps me in my professional carrier."
  },
  {
    name: "Sahil Pawar",
    position: "Powertrain",
    image: v28,
    linkedin: "https://www.linkedin.com/in/sahilpawar-mechanical?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Joining Resonance Racing’s Go-kart & Reev team as a powertrain engineer was a hands-on adventure, taking me from learning to designing, simulating, fabricating, and rigorously testing all our “khurafati” ideas."
  },
  {
    name: "Shreeyash Chandgude",
    position: "Electrical Powertrain",
    image: v29,
    linkedin: "https://www.linkedin.com/in/shreeyash-chandgude-407aa115a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being a part of the Resonance Racing Club as a Powertrain Engineer. I actively participated in REEV and Go-Kart events, where I got the opportunity to apply my academic knowledge to real-world engineering challenges.  "
  },
  {
    name: "Manoj Gore",
    position: "Vehicle Dynamics",
    image: v30,
    linkedin: "https://www.linkedin.com/in/manoj-gore-674907268?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the Resonance Racing team is most transformative experiences of my engineering. It provided me with a deep, practical understanding of how theoretical vehicle dynamics translate into real-world performance."
  },
  {
    name: "Parag Dhamne",
    position: "Vehicle Dynamics",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    linkedin: "https://www.linkedin.com/in/parag-dhamne-6538b8228?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the Resonance Racing Go-kart & REEV team as a member of the Steering and Vehicle Dynamics department was a highly enriching experience. It provided me with practical exposure to design, analysis, and teamwork beyond classroom learning."
  },
  {
    name: "Gaurang Gujarthi",
    position: "Brakes",
    image: 34,
    linkedin: "https://www.linkedin.com/in/gaurang-gujarathi-ba7375206?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    review: "Being part of the AISSMS Motorsport Club shaped my journey as an engineer. Working on Go-Karts and SAE REEV taught me teamwork, leadership, and real-world problem-solving."
  },


];

const Team1 = () => {
  const [animate, setAnimate] = useState(false);

useEffect(() => {
  setAnimate(true);

  const main = document.querySelector("main");

 
  if (!main) {
    alert("ERROR: Main container missing!");
    return;
  }

  const devSection = main.querySelector("#developers-section");

  
  if (!devSection) {
    alert("ERROR: Developers section has been removed!");
    return;
  }

  const sections = main.querySelectorAll("section");

  
  if (sections.length < 2) {
    alert("ERROR: Page structure is broken!");
    return;
  }

  
  if (sections[1] !== devSection) {
    alert("ERROR: Developers section must be at the top!");
    return;
  }

 
  if (devSection.id !== "developers-section") {
    alert("ERROR: Developers section ID has been modified!");
    return;
  }

  
  if (!devSection.innerHTML.trim()) {
    alert("ERROR: Developers section content missing!");
    return;
  }

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
      <section id="developers-section" className="my-20">
        <div className="flex justify-center mb-12">
          <h2 className={`learn-mo-line ${animate ? "active" : ""}`}>
            <span className="font-bold text-2xl md:text-3xl text-white">
              Developers Team
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 px-6">
  {teamdevloper.map((member, index) => (
    <div
      key={index}
      className="bg-[#1c1c1c] rounded-2xl w-full max-w-[28rem] min-h-[24rem] p-10 border border-white/10 hover:border-red-600/50 transition-all duration-300 relative group flex flex-col items-center text-center shadow-2xl"
    >
      {/* Profile Image with Red Outer Glow */}
      <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full border-[3px] border-red-600 overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.5)]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold text-white mb-1">
        {member.name}
      </h3>
      <p className="text-red-600 text-[4xl] font-black tracking-[0.2em] mb-6">
        {member.position}
      </p>
      <p className="text-gray-300 text-sm italic leading-relaxed px-4">
        "{member.review}"
      </p>

      {/* LinkedIn Badge - Exact match to screenshot */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-6 right-6 bg-[#f02e2e] text-white p-2 rounded-md hover:scale-110 transition-transform duration-200"
      >
        <FaLinkedin size={22} />
      </a>
    </div>
  ))}
</div>
      </section>

      {/* container 1 */}
      <div className="mt-10 mb-16">
        <h2 className="section-heading"></h2>
        <div>
          {/* Developers Section Start */}
          
          {/* Developers Section End */}


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

        <div>
          <div className="w-full flex justify-center">
            <h2 className={`text-center mt-6 mb-4 learn-mo-line ${animate ? "active" : ""}`}>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl block ">
                Team 2024-2025
              </span>
            </h2>

          </div>
          <div>
            <AnmolCarousel data={team20242025} />
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
