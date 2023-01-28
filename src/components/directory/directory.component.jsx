import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="container-main">
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
