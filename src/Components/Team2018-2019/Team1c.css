/* =========================
   MAIN CONTAINER
   ========================= */
.movies-list {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 90px 0 20px !important;
  background: transparent !important;
}

/* =========================
   CARD CONTAINER
   ========================= */
.card-container {
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* =========================
   CARD (NO SIZE CHANGE)
   ========================= */
.card {
  flex: 0 0 45%;
  min-height: 20rem;
  aspect-ratio: 9/16;
  position: relative;
  scroll-snap-align: start;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 10px;
}

/* =========================
   IMAGE
   ========================= */
.card-img-blur-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.card-img-blur-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* keep as you want */
  transform: scale(1);
  transition: all 0.5s ease;
}

/* .card-img-blur-wrapper img,
.card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1);
  transition: all 0.5s ease;
} */

/* Blur on hover */
.card:hover .card-img-blur-wrapper img {
  transform: scale(1.1);
  filter: blur(10px);
}

/* =========================
   OVERLAY CONTENT
   ========================= */
.card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;   /* 👈 FIXED */

  padding-top: 25%;             /* 👈 spacing from top */

  background: rgba(0, 0, 0, 0.6);

  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

/* Show content on hover (desktop) */

.card:hover .card-body {
  opacity: 1;
  transform: translateY(0);
}

/* =========================
   TEXT
   ========================= */
.name {
  color: #ff0000;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;  /* 👈 center text */
}

.Anmol {
  color: #fefefe;
  opacity: 0.8;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 6px;
  text-align: center;  /* 👈 center text */
}

/* =========================
   LINKEDIN BUTTON
   ========================= */
.linkedin-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;

  display: inline-flex;
  align-items: center;
  gap: 5px;

  background: #0077b5;
  color: white;
  padding: 6px 10px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.85rem;

  transition: 0.3s;
}

.linkedin-btn:hover {
  background: #005582;
}

/* =========================
   INDICATORS
   ========================= */
.indicator-container {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  gap: 8px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #ff000040;
  cursor: pointer;
  transition: background 0.3s;
}

.indicator.active {
  background: #ff0101;
}
/* Auto hover for mobile/tablet */
.card.auto-hover .card-body {
  opacity: 1;
  transform: translateY(0);
}

.card.auto-hover .card-img-blur-wrapper img {
  transform: scale(1.1);
  filter: blur(10px);
}
/* =========================
   RESPONSIVE
   ========================= */
@media (max-width: 992px) {
  .card {
    flex: 0 0 90%;
    margin: 0 5px;
  }

  .name {
    font-size: 1.3rem;
  }

  .Anmol {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .card-body {
    padding: 12px;
  }

  .linkedin-btn {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
