import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    const {Loadcount}=props
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products])
    return (
        <div className='container'>
            <h1>OUR PRODUCTS</h1>
            <div className='container'>
                <div className='row'>
                {
                    // products.map(product=><SingleProduct Loadcount={LoadCount} key={product.id} product={product}></Singl>)
                    products.map(product=><SingleProduct LoadCount={Loadcount} key={product?.id} product={product}></SingleProduct>)
                }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;