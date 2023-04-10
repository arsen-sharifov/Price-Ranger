import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Header from "../header/header";
import CarouselCard from "../carouselCard/card";

test("renders App component without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("renders Header component without crashing", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});

test("renders CarouselCard component without crashing", () => {
  const item = {
    id: 1,
    title: "Test item",
    description: "Test description",
    image: "https://example.com/image.jpg",
  };

  render(<CarouselCard item={item} onClick={() => {}} />);
});

test("clicking CarouselCard calls onClick with the correct item", () => {
  const item = {
    id: 1,
    title: "Test item",
    description: "Test description",
    image: "https://example.com/image.jpg",
  };

  const handleClick = jest.fn();

  render(<CarouselCard item={item} onClick={handleClick} />);

  userEvent.click(screen.getByText(item.title));
  expect(handleClick).toHaveBeenCalledWith(item);
});
