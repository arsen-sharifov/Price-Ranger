import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "../about";

jest.mock("../../reducer.js", () => ({
  getItemData: jest.fn(),
}));

jest.mock("../../utils/utils", () => ({
  filterDataByItem: jest.fn(),
}));

const mockItem = {
  id: 1,
  goods_image: "https://example.com/image.jpg",
  goods_name: "Test Item",
  description: "This is a test item.",
};

describe("About Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders About component without crashing", () => {
    render(<About item={mockItem} />);
  });

  test("displays correct item information", () => {
    render(<About item={mockItem} />);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("This is a test item.")).toBeInTheDocument();
  });

  test("renders item image correctly", () => {
    render(<About item={mockItem} />);
    const img = screen.getByAltText("error");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
  });
});
