import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <>
      <div>{itemData.title}</div>
      <div className="item-image-wrapper">
        <img src={itemData.image} alt={itemData.title} className="item-image" />
      </div>
    </>
  );
}
