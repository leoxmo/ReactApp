import React, { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext'


export const Products = () =>{

  const { products } = useContext(ProductsContext);
   console.log(products);

    return(
      <div>
     <>
            {products.length !== 0 && <h1>Productos</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>Internet lento... no hay productos para mostrar</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            $ {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn'>añadir carrito</button>
                    </div>
                ))}
            </div>
        </>

      </div>
    )
  
}



