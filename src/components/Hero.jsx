import Categories from "../components/Categories";
import Slider from "../components/Slider";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-main flex gap-5">
          <Categories />
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
