import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItem } from '../firebase/db';

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { itemId } = useParams(); 

  useEffect(() => {
      getItem(itemId)
      .then(res=> setItem(res))
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando detalles...</p>;
}

export default ItemDetailContainer;


