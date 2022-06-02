import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch("http://localhost:2323/products")
      let data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className='products'>
      {products.map((p) => (
        <div key={p.id}>
          <img src={p.image} />
          <h4>
            <Link to={`/products/${p.id}/${p.name}`} style={{ textDecoration: 'none' , color: 'black'}}>{p.name}</Link>
          </h4>
          <p>Rs. {p.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products;