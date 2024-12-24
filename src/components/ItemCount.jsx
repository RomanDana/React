import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Se ejecutó el efecto.');

    return () => {
      console.log('Se desmontó el componente.');
    };
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p style={{ border: 'double 2px black', padding: '10px', display: 'inline-block' }}>{count}</p>
      <Button style={{ backgroundColor: '#0c2c6b' }} onClick={handleDecrement} className="ms-2">
        -
      </Button>
      <Button style={{ backgroundColor: '#0c2c6b' }} onClick={handleIncrement} className="ms-2">
        +
      </Button>
    </div>
  );
}

export default ItemCount;

