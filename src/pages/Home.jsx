import Hero from "../components/Hero";
import TrendingCategories from "../components/TrendingCategories";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <section id="Home">
      <Hero />
      <Categories />
      <TrendingCategories />
    </section>
  );
};

export default Home;
