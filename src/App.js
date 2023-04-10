import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import CarouselCard from "./carouselCard/card";
import HomePage from "./homepage/homepage";
import About from "./about/about";
import Header from "./header/header";
import React from "react";
import { getItemData } from "./reducer";
import "./styles/App.scss";
import Footer from "./footer/footer";
function App() {
  const [selectedItem, setSelectedItem] = useState({});
  const [isSearchActive, setSearchActive] = useState(false);
  const setCurrentItem = (item) => {
    setSelectedItem(item);
    localStorage.setItem("selectedItem", JSON.stringify(item));
  };
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getItemData(
        "https://serhiiradiuk.pythonanywhere.com/api/goods/"
      );
      setItemList(data || []);
    }
    fetchData();
  }, []);

  const [filteredData, setFilteredData] = useState(itemList);
  console.log(isSearchActive);
  return (
    <BrowserRouter>
      <Header
        setFilteredData={setFilteredData}
        itemList={itemList}
        setSearchActive={setSearchActive}
      ></Header>
      <ul className="searched-items">
        {filteredData.map(
          (item, index) =>
            isSearchActive && (
              <CarouselCard
                key={index}
                item={item}
                onClick={() => {
                  setCurrentItem(item);
                  setSearchActive(false);
                }}
              ></CarouselCard>
            )
        )}
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            !isSearchActive && (
              <HomePage
                setCurrentItem={setCurrentItem}
                setSearchActive={setSearchActive}
              />
            )
          }
        ></Route>
        <Route
          path="/about"
          element={!isSearchActive && <About item={selectedItem} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
