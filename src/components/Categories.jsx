import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import CategoriesData from "../data/CategoriesData";

const Categories = () => {
  return (
    <section id="categories">
      <aside className="bg-white/[0.06] px-4 py-2 rounded-lg">
        <h4 className="mb-2 p-1 text-xl border-b-2 border-gray-400 rounded-sm ">
          Categories
        </h4>
        <ul className="flex flex-col gap-3 relative">
          {CategoriesData.map((category) => (
            <li key={category.id} className="flex items-center">
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
