import React, { useState, useEffect } from 'react'
import { LinearProgress, Grid } from '@material-ui/core';
import { Alert } from 'react-bootstrap';
import { searchProduct } from '../../services/product.service'
import ProductTile from './ProductTile'

const ProductList = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        searchProduct(props.filter).then((result) => {
            setProducts(result.items);
            setLoading(false);
        });

    }, [props.filter]);

    let list;

    if (loading) {
        list = <LinearProgress />
    } else if (products.length == 0) {
        list = <Alert severity="warning">Nothing found!</Alert>
    } else {

        let prodInTiles = products.map(prod => 
                <Grid item xs={4} key={prod.id}>
                    <ProductTile product={prod} />
                </Grid>
        );

        list = (<Grid container spacing={3}>{prodInTiles}</Grid>);
    }


    return (
        <>
            {list}
        </>
    );

}


export default ProductList;