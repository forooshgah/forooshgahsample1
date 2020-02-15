import React, { useState, useEffect } from 'react'
import * as productService from '../../core/services/product-services'
import ProductInGrid from '../../components/product-view/productInGrid'
import './productGrid.css'

function ProductGrid() {



    const [pagedProducts, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        productService.search()
        .then((result)=>{
            setProducts(result.data);
        }).finally(setLoading(false));
    }, []);    
    
    let list = null;
    if(loading){
        list = (<div> spinner </div>)
    }else if(pagedProducts.items && pagedProducts.items.length > 0){
        list =  pagedProducts.items.map((product) => {
            return (
                <ProductInGrid key={product.id} data={product} />
            );
        })
    }else{
        list = (<div> nothing found </div>)
    }
    return (
        <div>
            <div className="grid-sidebar">
                <div>
                    filter goes here
                </div>
            </div>
            <div className="grid-content">
                {list}
            </div>
        </div>
    );
}

export default ProductGrid;

