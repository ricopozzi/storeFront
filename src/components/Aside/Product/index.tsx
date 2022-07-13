import { useDispatch } from "react-redux";
import {
  ProductContainer,
  QuantityContainer,
  Separator,
  RemoveProduct,
} from "./styles";
import { removeItem, increase, decrease } from "../../../redux/cartSlice";
import { useEffect } from "react";

interface ProductProps {
  image: string;
  title: string;
  price: string;
  quantity?: number;
  id: any;
}

export const Product = ({
  id,
  image,
  price,
  title,
  quantity,
}: ProductProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (quantity === 0) {
      dispatch(removeItem(id));
    }
  }, [quantity]);

  return (
    <ProductContainer>
      <img src={image} />
      <h2>{title}</h2>
      <QuantityContainer>
        <button onClick={() => dispatch(decrease(id))}>-</button>
        <Separator />

        <div>{quantity}</div>
        <Separator />

        <button onClick={() => dispatch(increase(id))}>+</button>
      </QuantityContainer>
      <p>R${Math.trunc(Number(price))}</p>
      <RemoveProduct id='removeButton' onClick={() => dispatch(removeItem(id))}>
        x
      </RemoveProduct>
    </ProductContainer>
  );
};
