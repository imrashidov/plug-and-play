import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import CategoriesData from "../data/CategoriesData";

const Categories = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <section id="categories">
      <aside className="categories-main">
        <h4 className="categories-title">Categories</h4>
        <div className="categories-all">
          {CategoriesData.map((category) => (
            <ul
              key={category.id}
              className="categories-link"
              onClick={() => toggle(category.id)}
            >
              <div className="categories-name">
                <category.icon className="categories-icon" />
                <p>{category.name}</p>
                <FaChevronRight
                  className={`categories-chevron ${
                    selected === category.id ? "categories-active" : ""
                  }`}
                />
              </div>

              <ul className="categories-item">
                {category.items.map((item) => (
                  <Link
                    key={item.id}
                    className={selected === category.id ? "" : "!hidden"}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Categories;
