import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando detalles...</p>;
}

export default ItemDetailContainer;

