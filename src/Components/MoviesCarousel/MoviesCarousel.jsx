import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

import "./MoviesCarousel.css";

const MultiCarousel = ({ data }) => {
  const movies = data || [];

  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  /*
   * -------------------------------------------------------
   * GET CURRENT CARD INDEX
   * -------------------------------------------------------
   */

  const getCurrentIndex = useCallback(() => {
    const container = containerRef.current;

    if (!container) return 0;

    const cards = container.querySelectorAll(".card");

    if (!cards.length) return 0;

    const containerLeft = container.scrollLeft;

    let closestIndex = 0;
    let smallestDifference = Infinity;

    cards.forEach((card, index) => {
      const difference = Math.abs(
        card.offsetLeft - containerLeft
      );

      if (difference < smallestDifference) {
        smallestDifference = difference;
        closestIndex = index;
      }
    });

    return closestIndex;
  }, []);


  /*
   * -------------------------------------------------------
   * SCROLL TO CARD
   * -------------------------------------------------------
   */

  const scrollToCard = useCallback(
    (index, smooth = true) => {
      const container = containerRef.current;

      if (!container || movies.length === 0) return;

      const cards = container.querySelectorAll(".card");

      if (!cards.length) return;

      /*
       * Keep index inside valid range
       */
      const safeIndex =
        ((index % cards.length) + cards.length) %
        cards.length;

      const targetCard = cards[safeIndex];

      if (!targetCard) return;

      container.scrollTo({
        left: targetCard.offsetLeft,
        behavior: smooth ? "smooth" : "auto",
      });

      setCurrentIndex(safeIndex);
    },
    [movies.length]
  );


  /*
   * -------------------------------------------------------
   * STOP AUTO SCROLL
   * -------------------------------------------------------
   */

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);


  /*
   * -------------------------------------------------------
   * START AUTO SCROLL
   * -------------------------------------------------------
   */

  const startAutoScroll = useCallback(() => {
    if (movies.length <= 1) return;

    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const current = getCurrentIndex();

      const next =
        current + 1 >= movies.length
          ? 0
          : current + 1;

      scrollToCard(next, true);
    }, 3000);
  }, [
    movies.length,
    getCurrentIndex,
    scrollToCard,
  ]);


  /*
   * -------------------------------------------------------
   * USER STARTS TOUCH / MOUSE DRAG
   * -------------------------------------------------------
   */

  const handleInteractionStart = useCallback(() => {
    stopAutoScroll();
  }, [stopAutoScroll]);


  /*
   * -------------------------------------------------------
   * USER FINISHES SWIPING
   * -------------------------------------------------------
   */

  const handleInteractionEnd = useCallback(() => {
    const container = containerRef.current;

    if (!container) return;

    /*
     * Wait until browser finishes snapping
     */
    setTimeout(() => {
      const index = getCurrentIndex();

      setCurrentIndex(index);

      /*
       * Resume after 4 seconds.
       *
       * This gives user enough time to
       * look at the selected image.
       */
      resumeTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 4000);
    }, 150);
  }, [
    getCurrentIndex,
    startAutoScroll,
  ]);


  /*
   * -------------------------------------------------------
   * TRACK MANUAL SCROLL
   * -------------------------------------------------------
   */

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let scrollTimeout;

    const handleScroll = () => {
      /*
       * Whenever user manually scrolls,
       * stop auto movement.
       */
      stopAutoScroll();

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const index = getCurrentIndex();

        setCurrentIndex(index);

        /*
         * Restart after user stops scrolling
         */
        resumeTimeoutRef.current = setTimeout(() => {
          startAutoScroll();
        }, 4000);
      }, 150);
    };

    container.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );

      clearTimeout(scrollTimeout);
    };
  }, [
    getCurrentIndex,
    startAutoScroll,
    stopAutoScroll,
  ]);


  /*
   * -------------------------------------------------------
   * INITIAL AUTO SCROLL
   * -------------------------------------------------------
   */

  useEffect(() => {
    if (movies.length <= 1) return;

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, [
    movies.length,
    startAutoScroll,
    stopAutoScroll,
  ]);


  /*
   * -------------------------------------------------------
   * RESIZE
   * -------------------------------------------------------
   */

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;

      if (!container) return;

      const index = getCurrentIndex();

      /*
       * Recalculate position without animation
       */
      setTimeout(() => {
        const cards =
          container.querySelectorAll(".card");

        if (!cards.length) return;

        const safeIndex = Math.min(
          index,
          cards.length - 1
        );

        container.scrollTo({
          left: cards[safeIndex].offsetLeft,
          behavior: "auto",
        });

        setCurrentIndex(safeIndex);
      }, 100);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [getCurrentIndex]);


  /*
   * -------------------------------------------------------
   * EMPTY DATA
   * -------------------------------------------------------
   */

  if (movies.length === 0) {
    return null;
  }


  /*
   * -------------------------------------------------------
   * JSX
   * -------------------------------------------------------
   */

  return (
    <div className="movies-list">

      <div
        className="card-container"
        ref={containerRef}

        /*
         * Desktop mouse interaction
         */
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}

        /*
         * Mobile touch interaction
         */
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >

        {movies.map((movie, index) => (
          <div
            className="card"
            key={index}
          >

            <img
              src={movie.img}
              alt={
                movie.name ||
                `slide-${index + 1}`
              }
              className="movie-image"

              draggable="false"
            />

            {movie.name && (
              <div className="card-body">

                <h2 className="name">
                  {movie.name}
                </h2>

                <p className="des">
                  {movie.des}
                </p>

              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default MultiCarousel;
