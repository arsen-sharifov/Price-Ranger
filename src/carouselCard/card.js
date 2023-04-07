import { Link } from "react-router-dom";
import { Image } from "antd";
import { Card } from "antd";
import React from "react";
const { Meta } = Card;

const CarouselCard = ({ item, onClick }) => {
  return (
    <Link to="/about">
      <Card
        hoverable
        style={{
          width: 236,
          height: 333,
          marginTop: 25,
          marginBottom: 25,
        }}
        className="carouselCard"
        cover={
          <Image
            alt={item.item_name}
            src={item.goods_image}
            style={{ width: "234px", height: "234px" }}
          />
        }
        onClick={onClick}
      >
        <Meta title={item.goods_name} description={``} />
      </Card>
    </Link>
  );
};
export default CarouselCard;
