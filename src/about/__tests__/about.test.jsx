import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import About from "../about";
import { getItemData } from "../../reducer";
import { filterDataByItem } from "../../utils/utils";

jest.mock("../../reducer");
jest.mock("../../utils/utils");

describe("About component", () => {
  const mockItem = {
    id: 1,
    goods_image: "mock_image_url",
    goods_name: "mock_item_name",
    description: "mock_item_description",
  };

  afterEach(() => {
    jest.resetAllMocks();
    localStorage.clear();
  });

  test("renders About component without crashing", () => {
    render(<About item={{}} />);
  });

  test("displays correct item information", () => {
    render(<About item={mockItem} />);
    expect(screen.getByText("mock_item_name")).toBeInTheDocument();
    expect(screen.getByText("mock_item_description")).toBeInTheDocument();
  });

  test("displays item prices after fetching data", async () => {
    const mockData = [
      { id: 1, shop_id: 1, price: 10 },
      { id: 2, shop_id: 2, price: 20 },
    ];
    getItemData.mockResolvedValue(mockData);
    filterDataByItem.mockReturnValue(mockData);
    render(<About item={mockItem} />);
    await waitFor(() => {
      expect(screen.getByText("$10")).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText("$20")).toBeInTheDocument();
    });
  });

  test("displays no item prices if filteredData is empty", async () => {
    getItemData.mockResolvedValue([]);
    filterDataByItem.mockReturnValue([]);
    render(<About item={mockItem} />);
    await waitFor(() => {
      expect(screen.queryByText("$10")).not.toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.queryByText("$20")).not.toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText("No prices available.")).toBeInTheDocument();
    });
  });

  test("displays prices from localStorage if filteredData is empty", async () => {
    const mockData = [
      { id: 1, shop_id: 1, price: 10 },
      { id: 2, shop_id: 2, price: 20 },
    ];
    getItemData.mockResolvedValue([]);
    filterDataByItem.mockReturnValue([]);
    localStorage.setItem("selectedItem", JSON.stringify(mockItem));
    localStorage.setItem("itemPrices", JSON.stringify(mockData));
    render(<About item={{}} />);
    await waitFor(() => {
      expect(screen.getByText("$10")).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText("$20")).toBeInTheDocument();
    });
  });

  test("displays 'No item selected.' if item prop and localStorage are empty", () => {
    render(<About item={{}} />);
    expect(screen.getByText("No item selected.")).toBeInTheDocument();
  });
});
