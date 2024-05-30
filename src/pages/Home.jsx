import Hero from "~/components/Hero";
import TrendingCategories from "~/components/TrendingCategories";
import Categories from "~/components/Categories";
import BestSellingProducts from "~/components/BestSellingProducts";
import DailyOffers from "~/components/DailyOffers";
import Banner from "~/components/Banner";

const Home = () => {
  return (
    <section id="Home">
      <Hero />
      <Categories />
      <TrendingCategories />
      <BestSellingProducts />
      <DailyOffers />
      <Banner />
    </section>
  );
};

export default Home;
