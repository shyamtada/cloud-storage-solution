import React from 'react';
import {TextField, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    noBorder: {
        border: "none",
    },
});

function SearchBar({handleChange}) {

    const classes = useStyles();

    return (
        <TextField
            placeholder="Search"
            style={{ width: '100%' }}
            variant="outlined"
            className={"search-input"}
            onChange={(e) => {handleChange(e.target.value)}}
            InputProps={{
                startAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
                classes: { notchedOutline: classes.noBorder }
            }}
        />
    )
}

export default SearchBar;