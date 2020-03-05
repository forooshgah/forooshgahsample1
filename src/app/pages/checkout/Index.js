import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LayoutSubheader } from "../../../_metronic";
import CartItems from './CartItems'
import ShippingMethod from './ShippingMethod'
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    buttons:{
        display: "block",
        padding: "5px",
        textAlign:"right",
        borderTop: "1px dashed #ccc"
    },
    panelDetail:{
        display: "block"
    }
});

const Checkout = (props) => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const classes = useStyles();
    LayoutSubheader({ title: "Checkout" });


    return (

        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Review your Shopping cart</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.panelDetail}>
                    <CartItems/>
                    <div className={classes.buttons}>
                        <Button color="primary" onClick={() => {setExpanded('panel2')}}>Next step</Button>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Shpping Method</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.panelDetail}>
                    <ShippingMethod />
                    <div className={classes.buttons}>
                        <Button color="default" onClick={() => {setExpanded('panel1')}}>Prev step</Button>
                        <Button color="primary" onClick={() => {setExpanded('panel3')}}>Next step</Button>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Payment method</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        asdasdas
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Personal data</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>

    );



}


export default Checkout;