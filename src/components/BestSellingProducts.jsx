import { useState } from "react";
import BestSellingProductsData from "~/data/BestSellingProductsData";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const BestSellingProducts = () => {
  const [favorite, setFavorite] = useState([1, 4]);
  const handleFavoriteChange = (id) => {
    if (favorite.includes(id)) {
      setFavorite(favorite.filter((favId) => favId !== id));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  return (
    <section id="best-selling-products">
      <div className="container">
        <div className="bsp-products-main ">
          <h2 className="section-title">Best Selling Products</h2>
          <div className="bsp-products">
            {BestSellingProductsData.map((product) => (
              <div key={product.id} className="bsp-product-main group/bsp">
                <button onClick={() => handleFavoriteChange(product.id)}>
                  {favorite.includes(product.id) ? (
                    <MdFavorite className="favorite-icon" />
                  ) : (
                    <MdFavoriteBorder className="favorite-icon" />
                  )}
                </button>
                <div className="bsp-product">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="bsp-product__info">
                  <Link>{product.name}</Link>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
