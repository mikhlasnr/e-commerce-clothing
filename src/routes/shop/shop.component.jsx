import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      <div className="container-main">
        {Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
