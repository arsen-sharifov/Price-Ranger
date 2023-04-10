import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Card } from "antd";

import CarouselCard from "../card";

const { Meta } = Card;

const mockItem = {
  item_name: "Test Item",
  goods_image: "https://example.com/image.jpg",
};

const mockOnClick = jest.fn();

describe("CarouselCard Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders CarouselCard component without crashing", () => {
    render(
      <MemoryRouter>
        <CarouselCard item={mockItem} onClick={mockOnClick} />
      </MemoryRouter>
    );
  });

  test("displays correct item information", () => {
    render(
      <MemoryRouter>
        <CarouselCard item={mockItem} onClick={mockOnClick} />
      </MemoryRouter>
    );
    const meta = screen.getByAltText("Test Item");
    expect(meta.hasAttributes()).toBe(true);
  });

  test("renders item image correctly", () => {
    render(
      <MemoryRouter>
        <CarouselCard item={mockItem} onClick={mockOnClick} />
      </MemoryRouter>
    );
    const img = screen.getByAltText("Test Item");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  test("calls onClick when card is clicked", () => {
    render(
      <MemoryRouter>
        <CarouselCard item={mockItem} onClick={mockOnClick} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByAltText("Test Item"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
