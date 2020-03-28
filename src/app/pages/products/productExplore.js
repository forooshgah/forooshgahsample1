import React, { useState, useEffect } from "react"
import ProductSearch from "./productSearch";
import ProductList from "./productList";
import { Grid } from "@material-ui/core";
import BrandFilter from "./brandFilter";
import CategoryFilter from "./categoryFilter";
import { useParams } from "react-router-dom";


const ProductExplore = props => {

    const { search } = useParams()
    const [filter, setFilter] = useState({ name: search, brandIds: [] });


    useEffect(() => {
        setFilter(prev => (
            {                    // object that we want to update
                ...prev,        // keep all other key-value pairs
                name: search       // update the value of specific key
            }
        ));
    }, [search])

    // const onSearchText = (text) => {
    //     setFilter(prev => (
    //         {                    // object that we want to update
    //             ...prev,  // keep all other key-value pairs
    //             name: text       // update the value of specific key
    //         }
    //     ));
    // }

    const onSearchBrand = (brandId, checked) => {
        if (checked) {
            setFilter(prev => (
                {
                    ...prev,
                    brandIds: [
                        ...prev.brandIds,
                        brandId
                    ]
                }
            ));
        } else {
            setFilter(prev => (
                {
                    ...prev,
                    brandIds: prev.brandIds.filter(x => x != brandId)
                }
            ));
        }
    }

    const onSearchCategory = (catId, checked) => {
        if (checked) {
            setFilter(prev => (
                {
                    ...prev,
                    categoryIds: [
                        ...prev.brandIds,
                        catId
                    ]
                }
            ));
        } else {
            setFilter(prev => (
                {
                    ...prev,
                    categoryIds: prev.categoryIds.filter(x => x != catId)
                }
            ));
        }
    }

    return (
        <>
            {/* <ProductSearch  text={filter.text} onSearchText={onSearchText} /> */}
            <Grid container spacing={2}>
                <Grid item xs={5} sm={3} md={3}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    <BrandFilter brandChangeHandler={onSearchBrand} />
                    <CategoryFilter categorySelectHandler={onSearchCategory} />
                </Grid>
                <Grid item xs={7} sm={9} md={9}>
                    <ProductList filter={filter} />
                </Grid>
            </Grid>

        </>
    );

}


export default ProductExplore;