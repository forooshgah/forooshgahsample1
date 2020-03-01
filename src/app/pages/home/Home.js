import React, { useState } from 'react'
import ProductSearch from "../products/productSearch"
import ProductList from "../products/productList"
import ProductFilter from '../products/productFilter';
import { Grid, Paper } from '@material-ui/core';

const Home = () => {

    const [filter, setFilter] = useState({});
    const onSearchText = (text) => {
        setFilter(prev => (
            {                    // object that we want to update
                ...prev.filter,  // keep all other key-value pairs
                text: text       // update the value of specific key
            }
        ));
    }

    return (
        <>
            <ProductSearch text={filter.text} onSearchText={onSearchText} />

            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <ProductFilter />
                </Grid>
                <Grid item xs={10}>
                    <ProductList filter={filter} />
                </Grid>
            </Grid>

        </>
    );

}


export default Home;