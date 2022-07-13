import { MainContainer, Logo, Cart, Image } from "./styles";
import { selectItems } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

interface HeaderProps {
  handleOpen: any;
}

export const Header = ({ handleOpen }: HeaderProps) => {
  const items = useSelector(selectItems);

  return (
    <MainContainer>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>
      <Cart onClick={handleOpen}>
        <Image src='/cart.svg' />
        <p>{items.length}</p>
      </Cart>
    </MainContainer>
  );
};
