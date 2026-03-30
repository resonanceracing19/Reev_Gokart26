import React, { useRef, useState, useEffect, useCallback } from "react";
import "./MoviesCarousel.css";

const MultiCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const movies = data || [];

  const scrollTo = useCallback((index) => {
    const container = containerRef.current;
    if (container && movies.length > 0) {
      // Aapke CSS mein card ki width min-width: 43% hai + gap: 50px
      // Isliye clientWidth use karna best hai dynamic scrolling ke liye
      const scrollAmount = container.clientWidth / 2; 
      container.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  }, [movies.length]);

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current || movies.length === 0) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % movies.length;
        scrollTo(nextIndex);
        return nextIndex;
      });
    }, 3000); // 3 seconds interval
  }, [movies.length, scrollTo]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  if (movies.length === 0) return null;

  return (
    <div 
      className="movies-list" 
      onMouseEnter={stopAutoScroll} 
      onMouseLeave={startAutoScroll}
    >
      <div className="card-container" ref={containerRef}>
        {movies.map((m, idx) => (
          <div className="card" key={idx}>
            <img 
              src={m.img} 
              alt={`slide-${idx}`} 
              className="" 
            />
            {m.name && (
              <div className="card-body">
                <h2 className="name">{m.name}</h2>
                <p className="des">{m.des}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default MultiCarousel;