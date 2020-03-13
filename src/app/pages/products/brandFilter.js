import React, { useState, useEffect } from "react"
import { FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@material-ui/core";
import { getAllBrands } from "../../services/common.service"

const BrandFilter = props => {

    const [brands, setBrands] = useState([]);
    const { brandChangeHandler } = props
    useEffect(() => {
        getAllBrands().then(result => {
            setBrands(result);
        })

    }, [])

    return (
        <>
            <FormControl component="fieldset" margin="dense">
                <FormLabel component="legend">Brands</FormLabel>
                <FormGroup>
                    {brands.map((item, i) => (
                        <FormControlLabel
                            key={i}
                            label={item.value}
                            control={<Checkbox
                                onChange={(event) => { brandChangeHandler(item.id, event.target.checked) }}
                                value={item.id} />}
                        />
                    ))}
                </FormGroup>
            </FormControl>

        </>
    );

}


export default BrandFilter;