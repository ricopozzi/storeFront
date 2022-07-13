import React from "react";

import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Product } from "./index";

jest.mock("react-icons/fi");
jest.mock("react-redux", () => ({
  useDispatch() {
    return jest.fn();
  },
  useSelector: jest.fn(),
}));

describe("Product in cart test", () => {
  it("remove item", async () => {
    const { getByText, queryByTestId } = render(
      <Product id='testid' image={"cart.svg"} price='10' title='test title' />
    );

    fireEvent.click(getByText("x"));

    await waitFor(() => {
      expect(queryByTestId("testid")).not.toBeInTheDocument();
    });
  });
});
