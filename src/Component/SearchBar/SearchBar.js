import React from 'react';
import classes from './SearchBar.module.scss'
const SearchBar = (props) => {

    return (
        <div className={classes.Search}>
            <ul className={classes.SearchTypes}>
                {props.children}
            </ul>
        </div>
    )
};

export default SearchBar;