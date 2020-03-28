import React, { useState, useEffect } from 'react'
import { LinearProgress, Grid } from '@material-ui/core';
import { Alert, Pagination } from 'react-bootstrap';
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
            <Grid item xs={12} sm={6} md={4} xl={3} key={prod.id}>
                <ProductTile product={prod} />
            </Grid>
        );


        let paganation = (
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        );

        list = (
            <Grid container spacing={3}>{prodInTiles}
                <Grid item xs={12}>{paganation}</Grid>
            </Grid>);

    }


    return (
        <>
            {list}
        </>
    );

}


export default ProductList;