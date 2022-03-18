import React from 'react';

import './Menubar.css'

const Menubar = (props) => {
    // console.log(props.count);
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-lg-3"><p>LOGO</p></div>
                <div className="col-lg-9">
                    <a className='ms-2' href="/home">HOME</a>
                    <a className='ms-2' href="/cart">CART<sup>{props.count}</sup></a>
                    <a className='ms-2' href="/contruct">CONTRUCT</a>
                </div>
            </div>
        </div>
    );
};

export default Menubar;