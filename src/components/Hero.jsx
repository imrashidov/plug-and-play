import { motion } from "framer-motion";
import heroImg1 from "~/assets/Hero/hero-img1.webp";
import heroImg2 from "~/assets/Hero/hero-img2.png";
import heroImg3 from "~/assets/Hero/hero-img3.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-main">
          <div className="hero-text">
            <h3>Level Up Your Game.</h3>
            <p>
              Equip yourself with high-performance gear for next-level victory.
              Shop mice, keyboards, headsets, and more!
            </p>
            <div className="hero-text__buttons">
              <button>Learn More</button>
            </div>
          </div>
          <motion.div
            className="hero-photos"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hero-photo1"
              src={heroImg2}
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={heroImg1}
              className="hero-photo2"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={heroImg3}
              className="hero-photo3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
