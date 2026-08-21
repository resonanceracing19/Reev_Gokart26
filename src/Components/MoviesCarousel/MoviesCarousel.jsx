
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

import "./MoviesCarousel.css";

const MultiCarousel = ({ data = [] }) => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = data;

  /*
   * Get the exact scroll position of a card.
   * This is better than calculating:
   *
   * cardWidth + gap
   *
   * because CSS can change between desktop,
   * tablet and mobile.
   */
  const scrollToIndex = useCallback(
    (index, smooth = true) => {
      const container = containerRef.current;

      if (!container || movies.length === 0) return;

      const cards = container.querySelectorAll(".card");

      if (!cards[index]) return;

      const card = cards[index];

      /*
       * offsetLeft gives us the REAL position of
       * the card inside the scroll container.
       */
      const left = card.offsetLeft;

      container.scrollTo({
        left,
        behavior: smooth ? "smooth" : "auto",
      });

      setCurrentIndex(index);
    },
    [movies.length]
  );

  /*
   * Auto-scroll
   */
  const startAutoScroll = useCallback(() => {
    if (intervalRef.current || movies.length <= 1) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const nextIndex =
          previousIndex >= movies.length - 1
            ? 0
            : previousIndex + 1;

        scrollToIndex(nextIndex);

        return nextIndex;
      });
    }, 3000);
  }, [movies.length, scrollToIndex]);

  /*
   * Stop auto-scroll
   */
  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  /*
   * Start autoplay when component mounts.
   */
  useEffect(() => {
    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, [startAutoScroll, stopAutoScroll]);

  /*
   * When screen size changes:
   *
   * Desktop -> Tablet
   * Tablet -> Mobile
   * Mobile -> Desktop
   *
   * Recalculate the card position.
   */
  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        const container = containerRef.current;

        if (!container) return;

        /*
         * Reset to first card after responsive
         * layout changes.
         */
        setCurrentIndex(0);

        container.scrollTo({
          left: 0,
          behavior: "auto",
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Detect manual scrolling/swiping.
   *
   * This keeps currentIndex synchronized when
   * the user manually swipes on mobile/tablet.
   */
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let scrollTimer;

    const handleScroll = () => {
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        const cards = container.querySelectorAll(".card");

        if (!cards.length) return;

        const scrollLeft = container.scrollLeft;

        let closestIndex = 0;
        let smallestDistance = Infinity;

        cards.forEach((card, index) => {
          const distance = Math.abs(card.offsetLeft - scrollLeft);

          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestIndex = index;
          }
        });

        setCurrentIndex(closestIndex);
      }, 80);
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(scrollTimer);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [movies.length]);

  if (movies.length === 0) {
    return null;
  }

  return (
    <div
      className="movies-list"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div
        className="card-container"
        ref={containerRef}
      >
        {movies.map((movie, index) => (
          <div
            className="card"
            key={index}
          >
            <img
              src={movie.img}
              alt={movie.name || `slide-${index + 1}`}
              className="movie-image"
              draggable="false"
            />

            {movie.name && (
              <div className="card-body">
                <h2 className="name">
                  {movie.name}
                </h2>

                {movie.des && (
                  <p className="des">
                    {movie.des}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiCarousel;

