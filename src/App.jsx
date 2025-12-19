import React from "react";
import ProductCard from "./components/UI/productCard";
import { products } from "./assets";
import PriceTags from "./components/UI/PriceTags";
import BigProductCard from "./components/UI/BigProductCard";

const App = () => {
  return (
    <div className="container">
      <ProductCard
        price={"99.99"}
        title={"Green Apple"}
        icon={products.greenApple}
        rating={4.5}
      />
      <BigProductCard
        price={"99.99"}
        title={"Green Apple"}
        icon={products.greenApple}
        rating={4.5}
      />
    </div>
  );
};
export default App;
