import { render, screen } from "@testing-library/react";
import React from "react";
import ItemPrice from "../itemPrice";
import "@testing-library/jest-dom";

describe("ItemPrice", () => {
  const item = {
    shop_name: "Test Shop",
    item_name: "Test Item",
    price: 100,
  };

  test("renders item price component with correct information", () => {
    render(<ItemPrice item={item} />);

    const shopNameElement = screen.getByText(item.shop_name);
    expect(shopNameElement).toBeInTheDocument();

    const itemNameElement = screen.getByText(item.item_name);
    expect(itemNameElement).toBeInTheDocument();

    const priceElement = screen.getByText(`${item.price} грн`);
    expect(priceElement).toBeInTheDocument();
  });
});
