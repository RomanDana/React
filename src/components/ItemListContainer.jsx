import React, { useEffect, useState } from 'react';
import ItemList from './itemList';
import { useParams } from 'react-router';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const baseUrl = 'https://fakestoreapi.com/products';
    const categoryUrl = `${baseUrl}/category/${categoryId}`;

    fetch(categoryId ? categoryUrl : baseUrl)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [categoryId]);

  return <ItemList items={items} />;
}

export default ItemListContainer;




