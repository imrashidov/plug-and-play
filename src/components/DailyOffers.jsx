import { useState, useEffect } from "react";
import daily1 from "../assets/DailyOffers/daily1.png";

const DailyOffers = () => {
  const [time, setTime] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <section id="daily-offers">
      <div className="container">
        <div className="section-title">Daily Offers</div>
        <div className="daily-offers-main">
          <div className="daily-offers-left">
            <div className="daily-offers-text">
              <h2>Limited-Time Savings</h2>
              <p>
                Don&apos;t miss out on incredible savings on your favorite
                items! Check out our daily deals and snag amazing discounts
                before they disappear.
              </p>
            </div>
            <div className="daily-offers-countdown">
              <div className="daily-offers-countdown__item">
                <span>{hours}</span>
                <p>Hour{hours > 1 ? "s" : ""}</p>
              </div>
              <div className="daily-offers-countdown__item">
                <span>{minutes}</span>
                <p>Minute{minutes > 1 ? "s" : ""}</p>
              </div>
              <div className="daily-offers-countdown__item">
                <span>{seconds}</span>
                <p>Second{seconds > 1 ? "s" : ""}</p>
              </div>
            </div>
            <button>Buy Now</button>
          </div>
          <div className="daily-offers-img">
            <img
              src={daily1}
              alt="Daily Offer Item"
              className="object-scale-down"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyOffers;
