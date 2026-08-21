import React, { useRef, useState, useEffect, useCallback } from "react";
import "./MoviesCarousel.css";

const MultiCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const movies = data || [];

  const scrollTo = useCallback(
    (index) => {
      const container = containerRef.current;

      if (!container || movies.length === 0) return;

      const card = container.querySelector(".card");

      if (!card) return;

      // Get actual card width
      const cardWidth = card.offsetWidth;

      // Get actual gap from CSS
      const styles = window.getComputedStyle(container);
      const gap = parseFloat(styles.columnGap || styles.gap || 0);

      const scrollAmount = cardWidth + gap;

      container.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });

      setCurrentIndex(index);
    },
    [movies.length]
  );

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current || movies.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % movies.length;

        scrollTo(nextIndex);

        return nextIndex;
      });
    }, 3000);
  }, [movies.length, scrollTo]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, [startAutoScroll, stopAutoScroll]);

  // Reset carousel when screen size changes
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;

      if (container) {
        container.scrollTo({
          left: 0,
          behavior: "auto",
        });
      }

      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              alt={m.name || `slide-${idx}`}
              className="movie-image"
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
