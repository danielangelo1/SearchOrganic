import React from "react";
import { useAppSelector } from "../../feature/hooks/hooks";

const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  return (
    <>
      <h1>Carrinho</h1>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.imgsrc} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
