import React, { useState, useRef } from 'react'
import {
    Button,
    InputGroup,
    FormControl,
} from "react-bootstrap";

const ProductSearch = (props) => {
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearchText(inputRef.current.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputGroup className="mb-3" size="lg">
                    <FormControl
                        value={props.searchText}
                        ref={inputRef}
                        placeholder="product or category"
                        aria-label="search"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" type="submit">
                            <i className="fa fa-search"></i>
                            Search
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        </>
    );

}


export default ProductSearch;