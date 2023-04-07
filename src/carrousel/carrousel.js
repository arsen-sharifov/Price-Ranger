import { useState, useEffect } from "react";
import { Carousel } from "antd";
import React from "react";
import CarouselCard from "../carouselCard/card";
import { getItemData } from "../reducer";
import { getRandomElements } from "../utils/utils";

import "./styles/carrousel.scss";

const Carrousel = ({ setCurrentItem, setSearchActive }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getItemData(
        "https://serhiiradiuk.pythonanywhere.com/api/goods/"
      );
      const cutedData = getRandomElements(data, 20);
      setItemList(cutedData || []);
    }
    fetchData();
  }, []);

  return (
    <Carousel slidesToShow={5} slidesToScroll={5} className={"carousel"}>
      {itemList.map((item, index) => (
        <CarouselCard
          key={index}
          item={item}
          onClick={() => {
            setCurrentItem(item);
          }}
        />
      ))}
    </Carousel>
  );
};
export default Carrousel;
