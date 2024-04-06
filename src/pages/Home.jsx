import Hero from "../components/Hero";
import TrendingCategories from "../components/TrendingCategories";
import Categories from "../components/Categories";
import BestSellingProducts from "../components/BestSellingProducts";

const Home = () => {
  return (
    <section id="Home">
      <Hero />
      <Categories />
      <TrendingCategories />
      <BestSellingProducts />
    </section>
  );
};

export default Home;
