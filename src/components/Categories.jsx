import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import CategoriesData from "../data/CategoriesData";

const Categories = () => {
  return (
    <section id="categories">
      <aside className="categories-main">
        <h4 className="categories-title">Categories</h4>
        <ul>
          {CategoriesData.map((category) => (
            <li key={category.id} className="">
              <category.icon className="categories-icon" />
              <div className="categories-link">
                <Link>{category.name}</Link>
                <FaChevronRight />
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Categories;
