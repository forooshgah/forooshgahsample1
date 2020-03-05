import React from "react"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField } from "@material-ui/core";

const ShoppingMethod = () => {
    const [value, setValue] = React.useState('fast');

    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        (<>
            <FormControl>
                <FormLabel component="legend">select shipping method</FormLabel>
                <RadioGroup name="shippingType" value={value} onChange={handleChange} >
                    <FormControlLabel
                        value="fast"
                        control={<Radio color="primary" />}
                        label={<div><i className="fa fa-biking"></i> Fast Delivery (+5)</div>}
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="post"
                        control={<Radio color="primary" />}
                        label={
                            <div><i className="fa fa-truck"></i> Post Delivery (depend on address)
                            <div>
                                    <TextField
                                        id="outlined-name"
                                        label="postal code"
                                        margin="normal"
                                        variant="outlined"
                                        disabled={value != "post"}
                                    />
                                </div>

                            </div>
                        }
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl>

        </>)
    );

}

export default ShoppingMethod;