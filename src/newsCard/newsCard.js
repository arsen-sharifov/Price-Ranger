import { Image } from "antd";
import { Card } from "antd";
import React from "react";
const { Meta } = Card;

const NewsCard = ({ image, title, description }) => {
  return (
    <Card
      hoverable
      style={{
        width: 320,
        height: 300,
        marginTop: 10,
        marginBottom: 10,
      }}
      className="newsCard"
      cover={
        <Image
          alt=""
          src={require("../images/demo-images/news.png")}
          style={{ width: "320px", height: "200px" }}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
export default NewsCard;
