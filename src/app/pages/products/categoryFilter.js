import React, { useState, useEffect } from "react"
import { getAllTree } from "../../services/category.service"
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@material-ui/core";

const CategoryFilter = props => {

    const [categories, setCategories] = useState([]);
    const { categorySelectHandler } = props
    useEffect(() => {
        getAllTree().then(result => {
            setCategories(result);
        })

    }, [])


    const renderTree = nodes => (nodes.map(node => (
        <TreeItem
            key={node.id}
            nodeId={node.id}
            label={<FormControlLabel
                label={node.name}
                control={<Checkbox
                    onChange={(event) => { categorySelectHandler(node.id, event.target.checked) }}
                    value={node.id} />}
            />}
        >
            {Array.isArray(node.children) ? renderTree(node.children) : null}
        </TreeItem>
    )));

    return (
        <FormControl component="fieldset" margin="dense">
            <FormLabel component="legend">Categories</FormLabel>
            <FormGroup>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpanded={['root']}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    {categories.length > 0 ? renderTree(categories) : null}
                </TreeView>
            </FormGroup>
        </FormControl>
    );

}


export default CategoryFilter;