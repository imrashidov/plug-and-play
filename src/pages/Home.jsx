import Hero from "../components/Hero";
import TrendingCategories from "../components/TrendingCategories";
import Categories from "../components/Categories";
import BestSellingProducts from "../components/BestSellingProducts";
import DailyOffers from "../components/DailyOffers";

const Home = () => {
  return (
    <section id="Home">
      <Hero />
      <Categories />
      <TrendingCategories />
      <BestSellingProducts />
      <DailyOffers />
    </section>
  );
};

export default Home;
