import {
  MainContainer,
  Wrapper,
  ProductGrid,
  LoadingContainer,
} from "./indexStyles";
import { Header } from "./components/Header";
import { ProductCard, ProductProps } from "./components/ProductCard";
import { Aside } from "./components/Aside";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, selectItems } from "./redux/cartSlice";
import { SkeletonLoading } from "./components/Skeleton";
import { getProductsFetch } from "./redux/productsSlice";

interface ApiItem {
  id: string;
  name: string;
  description: string;
  price: string;
  photo: string;
}

const Home = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getProductsFetch());
  }, []);

  const handleCartState = () => {
    return setOpenCart(!openCart);
  };

  return (
    <>
      <Wrapper>
        <Header handleOpen={handleCartState} />
        <MainContainer>
          {products.isLoading ? (
            <LoadingContainer>
              <SkeletonLoading />
            </LoadingContainer>
          ) : (
            <>
              <ProductGrid>
                {products.products.products?.map((item: ApiItem) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    description={item.description}
                    image={item.photo}
                    price={item.price}
                    buyButton={() =>
                      dispatch(addItemToCart({ ...item, quantity: 1 }))
                    }
                  />
                ))}
              </ProductGrid>
            </>
          )}
        </MainContainer>
        <Aside handleClose={handleCartState} cartState={openCart} />
      </Wrapper>
    </>
  );
};

export default Home;
