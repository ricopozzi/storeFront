import {
  AsideContainer,
  CloseButton,
  ProductsContainer,
  ResultContainer,
  FinalizeContainer,
} from "./styles";
import { Product } from "./Product";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../redux/cartSlice";
import { useEffect, useState } from "react";

export const Aside = ({
  cartState,
  handleClose,
}: {
  cartState?: boolean;
  handleClose?: any;
}) => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   items.map((item: any) => setTotal(total + Number(item.price)));
  // }, [items]);

  return (
    <AsideContainer
      //@ts-ignore
      cartState={cartState}
    >
      <h1>Carrinho de Compras</h1>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <ProductsContainer>
        {items?.map((item: any) => (
          <Product
            image={item.photo}
            id={item.id}
            price={item.price}
            title={item.name}
            quantity={item.quantity}
            key={item.id}
          />
        ))}
      </ProductsContainer>
      <ResultContainer>
        <p>Total:</p>
        <p>R${total}</p>
      </ResultContainer>
      <FinalizeContainer>Finalizar Compra</FinalizeContainer>
    </AsideContainer>
  );
};
