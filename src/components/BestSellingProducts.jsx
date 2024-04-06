import BestSellingProductsData from "../data/BestSellingProductsData";
import { Link } from "react-router-dom";

const BestSellingProducts = () => {
  return (
    <section id="best-selling-products">
      <div className="container">
        <div className="bsp-products-main">
          <h2 className="section-title">Best Selling Products</h2>
          <div className="bsp-products">
            {BestSellingProductsData.map((product) => (
              <div key={product.id} className="group">
                <div className="bsp-product group">
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
