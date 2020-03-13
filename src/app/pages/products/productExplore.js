import React, { useState } from "react"
import ProductSearch from "./productSearch";
import ProductList from "./productList";
import { Grid } from "@material-ui/core";
import BrandFilter from "./brandFilter";
import CategoryFilter from "./categoryFilter";


const ProductExplore = props =>{

    const [filter, setFilter] = useState({text:null, brandIds:[]});
    const onSearchText = (text) => {
        setFilter(prev => (
            {                    // object that we want to update
                ...prev,  // keep all other key-value pairs
                name: text       // update the value of specific key
            }
        ));
    }

    const onSearchBrand = (brandId, checked) => {
        if(checked){
            setFilter(prev => (
                {                    
                    ...prev,  
                    brandIds: [
                        ...prev.brandIds,
                        brandId
                    ]       
                }
            ));
        }else{
            setFilter(prev => (
                {                    
                    ...prev,  
                    brandIds: prev.brandIds.filter(x => x != brandId)  
                }
            ));
        }
    }

    const onSearchCategory = (catId, checked) => {
        if(checked){
            setFilter(prev => (
                {                    
                    ...prev,  
                    categoryIds: [
                        ...prev.brandIds,
                        catId
                    ]       
                }
            ));
        }else{
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
            <ProductSearch  text={filter.text} onSearchText={onSearchText} />
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <BrandFilter brandChangeHandler={onSearchBrand} />
                    <CategoryFilter categorySelectHandler={onSearchCategory} />
                </Grid>
                <Grid item xs={10}>
                    <ProductList filter={filter} />
                </Grid>
            </Grid>

        </>
    );

}


export default ProductExplore;