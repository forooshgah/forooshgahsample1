import React, { useEffect, useState } from "react"
import { Grid, makeStyles } from "@material-ui/core";
import baseService from "../../services/base.service"
import ImageGallery from 'react-image-gallery';

const ProductImages = props => {

    //const { images } = props


    const images = props.images.map(i => {
        return {
            thumbnail: baseService.baseUrl + i.filePath,
            original: baseService.baseUrl + i.filePath
        }
    });
    // const [main, setMain] = useState(images.sort((a, b) => a.isMain > b.isMain)[0])

    // const classes  = useStyles();

    // const changeDefault = (item) =>{
    //     setMain(item);

    // }

    return (
        <>

            <ImageGallery
                items={images}
                showPlayButton={false}
            />;
            {/* <Grid container spacing={2}>
                <Grid item xs={12} >
                    <img src={baseService.baseUrl + main.filePath} className={classes.mainImg}/>
                </Grid>
                {images.map((item, i) => (
                    <Grid item xs={3} sm={4} key={i} 
                    className={classes.imgContainer}
                    onClick={() => changeDefault(item)}
                    >
                        <img src={baseService.baseUrl + item.filePath} className={classes.smallImg}/>
                    </Grid>
                ))}

            </Grid> */}

        </>
    );
}

const useStyles = makeStyles({
    imgContainer: {
        border: "1px solid #eee",
        margin: "5px",
        "&:hover": {
            border: "1px solid #bbb"
        }
    },

    mainImg: {
        maxHeight: "300px",
        minHeight: "200px",
        width: "100%"

    },
    smallImg: {
        height: "100px",
        width: "100%"
    }

})

export default ProductImages