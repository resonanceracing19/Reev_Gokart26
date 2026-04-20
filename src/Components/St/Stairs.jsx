import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  MessageCircle,
  Mail,
  Phone,
  User,
  Briefcase,
  ChevronRight,
} from "lucide-react";

import Footer from "../Footer/Footer.jsx";

const Stairs = () => {
  // External Links
  const LINKS = {
    form: "#",
    whatsapp: "https://chat.whatsapp.com/JOxnh2E4dUs1HyGe3yxtzO",
  };

  // HERO animation state
  const [heroAnimate, setHeroAnimate] = useState(false);
  const heroHeadingRef = useRef(null);

  // Leadership animation state
  const [leadershipInView, setLeadershipInView] = useState(false);
  const leadershipRef = useRef(null);

  // ================= HERO OBSERVER =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (heroHeadingRef.current) {
      observer.observe(heroHeadingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ================= LEADERSHIP OBSERVER =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeadershipInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (leadershipRef.current) {
      observer.observe(leadershipRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Leadership Data
  const LEADERS = [
    {
      
      name: "Harshvardhan Ghatge",
      phone: "+91 9049959909",
      email: "harshvardhan14ghatge@gmail.com",
      theme: {
        border: "border-white/10",
        bg: "bg-red-50",
        text: "text-red-600",
        badge: "bg-red-600 text-white",
      },
    },
    {
      
      name: "Aadesh mehta" ,
      phone: "+91 9766780387",
      email: "aadeshmehta7@gmail.com",
      theme: {
        border: "border-white/10",
        bg: "bg-gray-100",
        text: "text-black",
        badge: "bg-black text-white",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#101010] text-slate-900 font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-4 bg-[#101010] overflow-hidden">
        {/* relative py-24 px-4 bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden */}

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <span className="inline-block mt-9 mb-6 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white bg-white/10 border border-white/20 rounded-full backdrop-blur">
            Join the Legacy
          </span>
          <br />

          {/* Animated Heading */}
          <h2
            ref={heroHeadingRef}
            className={`text-center mt-6 mb-4 learn-mo-line ${
              heroAnimate ? "active" : ""
            }`}
          >
            <span className="font-bold text-xl sm:text-2xl md:text-3xl block text-white">
              We Are Recruiting
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Join Resonance Racing - Transform your passion for engineering into real-world impact. Work on cutting-edge EV projects, develop leadership skills, and compete at national levels.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <a
              href={LINKS.form}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-700 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-100 hover:-translate-y-1 transition"
            >
              <Briefcase className="w-5 h-5" />
              Join Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-bold text-lg shadow-xl border border-red-600/30 hover:bg-zinc-900 hover:-translate-y-1 transition"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              WhatsApp Community
            </a>

          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP SECTION ================= */}
      <section
        ref={leadershipRef}
        className="py-20 px-4 max-w-6xl mx-auto"
      >

        <div className="text-center mb-16">

          <h2 className={`learn-mo-line ${leadershipInView ? "active" : ""}`}>
            <span className="font-bold text-xl sm:text-2xl md:text-3xl block text-white">
              Current Leadership
            </span>
          </h2>

          <div className="" />

          <p className="mt-6 text-gray-400 max-w-lg mx-auto">
            Have questions? Reach out to our Captain or Vice Captain directly.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {LEADERS.map((leader, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl shadow-xl border-t-8 transition-all duration-500 ease-out
              ${
                leadershipInView
                  ? "bg-white/10 hover:bg-black hover:scale-105 "
                  : "bg-white/10"
              }
              ${leader.theme.border}`}
            >

              {/* Avatar */}
              <div
                className={`w-28 h-28 flex items-center justify-center rounded-2xl ${leader.theme.bg}`}
              >
                <User className={`w-14 h-14 ${leader.theme.text}`} />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">

                

                <h3 className="text-3xl font-bold text-white">
                  {leader.name}
                </h3>

                <div className="space-y-3">

                  <a
                    href={`tel:${leader.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition"
                  >
                    <Phone className="w-4 h-4" />
                    {leader.phone}
                  </a>

                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition"
                  >
                    <Mail className="w-4 h-4" />
                    {leader.email}
                  </a>

                </div>

              </div>

              <Users className="absolute -bottom-6 -right-6 w-40 h-40 opacity-5 rotate-12 pointer-events-none" />

            </div>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default Stairs;
