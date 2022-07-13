import React from "react";
import { ProductCard } from "./index";

import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Aside } from "../Aside/index";
import { Product } from "../Aside/Product";

jest.mock("react-icons/fi");
jest.mock("react-redux", () => ({
  useDispatch() {
    return jest.fn();
  },
  useSelector: jest.fn(),
}));

const dispatch = jest.fn();

describe("Product Card test", () => {
  it("Buy button click and go to cart", async () => {
    const { getByText } = render(
      <ProductCard
        id='testid'
        description='test description'
        image={"cart.svg"}
        price='10'
        title='test title'
      />
    );

    fireEvent.click(getByText("COMPRAR"));

    const { getByText: asideGetByText } = render(<Aside />);

    expect(asideGetByText("test title")).toBeInTheDocument();
  });
});
