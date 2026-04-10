import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer/Footer.jsx";

/* ================= SVG ICONS ================= */

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M7 21v-2a4 4 0 0 1 3-3.87"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MessageCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 11.5a8.5 8.5 0 1 1-3-6.5L21 3v8.5z"></path>
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16v16H4z"></path>
    <path d="M22 6l-10 7L2 6"></path>
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2"></path>
    <path d="M2 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4"></path>
  </svg>
);

const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4"></circle>
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path>
  </svg>
);

const Briefcase = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14"></rect>
    <path d="M16 3H8v4h8z"></path>
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6"></path>
  </svg>
);

/* ================= MAIN COMPONENT ================= */

const Stairs = () => {
  const LINKS = {
    form: "https://forms.google.com/your-form-link",
    whatsapp: "https://chat.whatsapp.com/your-community-link",
  };

  const [heroAnimate, setHeroAnimate] = useState(false);
  const heroHeadingRef = useRef(null);

  const [leadershipInView, setLeadershipInView] = useState(false);
  const leadershipRef = useRef(null);

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

    if (heroHeadingRef.current) observer.observe(heroHeadingRef.current);
    return () => observer.disconnect();
  }, []);

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

    if (leadershipRef.current) observer.observe(leadershipRef.current);
    return () => observer.disconnect();
  }, []);

  const LEADERS = [
    {
      role: "Captain",
      name: "Omkar Tigote",
      phone: "+91 1234567899",
      email: "captain@gmail.com",
      theme: {
        border: "border-white/10",
        bg: "bg-red-50",
        text: "text-red-600",
        badge: "bg-red-600 text-white",
      },
    },
    {
      role: "Vice Captain",
      name: "Tanaya Otari",
      phone: "+91 9876543211",
      email: "vicecaptain@gmail.com",
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

      {/* HERO */}
      <section className="relative py-24 px-4 bg-[#101010] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <span className="inline-block mt-9 mb-6 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white bg-white/10 border border-white/20 rounded-full backdrop-blur">
            Join the Legacy
          </span>

          <h2
            ref={heroHeadingRef}
            className={`mt-6 mb-4 ${heroAnimate ? "active" : ""}`}
          >
            <span className="font-bold text-xl sm:text-2xl md:text-3xl block text-white">
              We Are Recruiting
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10">
            text of resonance
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <a href={LINKS.form} target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-700 rounded-xl font-bold text-lg hover:-translate-y-1 transition">
              <Briefcase className="w-5 h-5" />
              Join Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>

            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-bold text-lg border border-red-600/30 hover:-translate-y-1 transition">
              <MessageCircle className="w-5 h-5 text-green-500" />
              WhatsApp Community
            </a>

          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section ref={leadershipRef} className="py-20 px-4 max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className={`${leadershipInView ? "active" : ""}`}>
            <span className="font-bold text-xl sm:text-2xl md:text-3xl block text-white">
              Current Leadership
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg mx-auto">
            Have questions? Reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {LEADERS.map((leader, index) => (
            <div key={index}
              className="relative flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl shadow-xl border-t-8 bg-white/10 hover:scale-105 transition">

              <div className={`w-28 h-28 flex items-center justify-center rounded-2xl ${leader.theme.bg}`}>
                <User className={`w-14 h-14 ${leader.theme.text}`} />
              </div>

              <div className="flex-1 space-y-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${leader.theme.badge}`}>
                  {leader.role}
                </span>

                <h3 className="text-3xl font-bold text-white">
                  {leader.name}
                </h3>

                <div className="space-y-3">
                  <a href={`tel:${leader.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-red-400">
                    <Phone className="w-4 h-4" />
                    {leader.phone}
                  </a>

                  <a href={`mailto:${leader.email}`} className="flex items-center gap-3 text-gray-300 hover:text-red-400">
                    <Mail className="w-4 h-4" />
                    {leader.email}
                  </a>
                </div>
              </div>

              <Users className="absolute -bottom-6 -right-6 w-40 h-40 opacity-5 rotate-12" />
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stairs;
