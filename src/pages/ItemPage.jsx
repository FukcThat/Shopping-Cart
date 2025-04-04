import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ItemPage.css";

export default function ItemPage() {
  const [itemData, setItemData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((data) => setItemData(data))
      .catch((error) => {
        console.error(error);
        setItemData(-1);
      });
  }, []);

  return itemData === null ? (
    <div>Loading...</div>
  ) : itemData === -1 ? (
    <div>Sorry about that.</div>
  ) : (
    <div className="item-page">
      <div className="item-page--image-wrapper">
        <img
          src={itemData.image}
          alt={itemData.title}
          className="item-page-image"
        />
      </div>
      <div className="item-page--text-wrapper">
        <div className="item-page-title">{itemData.title}</div>
        <div className="item-page-description">{itemData.description}</div>
        <div className="item-page--price-group">
          <div className="add-input-group">
            <button className="less-btn">-</button>
            <input type="number" defaultValue={0}></input>
            <button className="more-btn">+</button>
          </div>
          <div className="item-page-price">$ {itemData.price}</div>
        </div>
      </div>
    </div>
  );
}
