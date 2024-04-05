import CategoriesSidebar from "./CategoriesSidebar";
import Slider from "./Slider";

const Categories = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Categories</h2>
        <div className="flex gap-12">
          <CategoriesSidebar />
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Categories;
