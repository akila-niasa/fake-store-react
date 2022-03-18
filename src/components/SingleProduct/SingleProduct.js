import React from 'react';

import ReactModel from '../ReactModel/ReactModel';


const SingleProduct = (props) => {
    // console.log(props);
    // const {product}=props
    const{LoadCount}=props
    // console.log(LoadCount);
    return (
        <div   data-aos="zoom-in-up" data-aos-anchor-placement="top-center" className='col-lg-4'>

            <div className="card">
                <img className='w-50' src={props?.product.image} alt="" />
                <h1>{props?.product.title.slice(0,10)}</h1>
                <div className='d-flex justify-content-around'>
                 <button onClick={LoadCount} className='btn btn-success'>Add to Cart
                 </button>
                      <button className='btn btn-danger'>Delete</button>
                    {/* <button className='btn btn-primary'>Details</button> */}
                    <ReactModel product={props.product}></ReactModel>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;