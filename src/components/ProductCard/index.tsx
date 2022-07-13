import { CardContainer } from "./styles";
import { FiShoppingBag } from "react-icons/fi";

export interface ProductProps {
  image: string;
  title: string;
  price: string;
  description: string;
  id: string;
  buyButton?: any;
  quantity?: number;
}

export const ProductCard = ({
  image,
  title,
  description,
  price,
  buyButton,
}: ProductProps) => {
  return (
    <CardContainer>
      <img src={image} />
      <section>
        <h1>{title}</h1>
        <div>R${Math.trunc(Number(price))}</div>
      </section>
      <p>Redesigned from scratch and completely revised.</p>
      <button onClick={buyButton}>
        <FiShoppingBag size={20} color='white' />
        <p>COMPRAR</p>
      </button>
    </CardContainer>
  );
};
