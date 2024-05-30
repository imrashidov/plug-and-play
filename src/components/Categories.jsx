import CategoriesSidebar from "./CategoriesSidebar";
import Slider from "./Slider";

const Categories = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Categories</h2>
        <div className="categories">
          <CategoriesSidebar />
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Categories;
