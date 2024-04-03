import { motion } from "framer-motion";
import heroImg1 from "../assets/Hero/hero-img1.webp";
import heroImg2 from "../assets/Hero/hero-img2.png";
import heroImg3 from "../assets/Hero/hero-img3.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-main">
          <div className="hero-text w-full">
            <div className="py-10 px-20 flex flex-col gap-7">
              <h3 className="text-3xl">Level Up Your Game.</h3>
              <p className="text-gray-500 ">
                Equip yourself with high-performance gear for next-level
                victory. Shop mice, keyboards, headsets, and more!
              </p>
              <div className="hero-text__buttons flex gap-10 w-fit ">
                <button className="btn btn-secondary text-lg bg-dark-secondary/[0.6] hover:bg-dark-secondary pointer px-3 py-2 rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <motion.div
            className="hero-photos p-2 rounded-2xl relative max-h-[40rem] z-0 "
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
              className="hero-photo w-[50rem] mt-24"
              src={heroImg2}
            />
            <motion.img
              className="hero-photo w-52 absolute top-3 left-3 z-[-1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={heroImg1}
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hero-photo w-48 absolute bottom-0 right-0 z-20"
              src={heroImg3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
