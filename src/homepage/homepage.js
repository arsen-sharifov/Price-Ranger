import Carrousel from "../carrousel/carrousel";
import NewsCard from "../newsCard/newsCard";
import React from "react";
import "./styles/homepage.scss";

function HomePage({ setCurrentItem, setSearchActive }) {
  return (
    <div className="homePage">
      <div className="carousel-wrapper">
        <h2>Популярні зараз</h2>
        <Carrousel
          setCurrentItem={setCurrentItem}
          setSearchActive={setSearchActive}
        />
      </div>
      <div className="carousel-wrapper">
        <h2>Товари для вас</h2>
        <Carrousel setCurrentItem={setCurrentItem} />
      </div>
      <div className="line" />
      <div className="news">
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
        <NewsCard
          title="Чому не варто просити програміста полагодити пральну машинку"
          description="Тут ми розберемось чому програмісти не вміють лагодити пральну  мишинку"
        />
      </div>
      <div className="line" />
      <div className="carousel-wrapper">
        <h2>Новинки</h2>
        <Carrousel setCurrentItem={setCurrentItem} />
      </div>
      <div className="carousel-wrapper">
        <h2>Товари зі знижкою</h2>
        <Carrousel setCurrentItem={setCurrentItem} />
      </div>
    </div>
  );
}

export default HomePage;
