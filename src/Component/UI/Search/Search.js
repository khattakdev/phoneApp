import React from 'react';
import classes from './Search.module.scss'

const search = (props) =>{

    // const cssClasses = 
    return (
            <React.Fragment>
            <input 
                disabled={props.disabled} 
                type="text" className={[classes.Search, props.className].join(' ')} 
                onChange={props.search} />
            {/* <i className={["fas fa-search", classes.NavSearchIcon].join(' ')}></i> */}
        </React.Fragment>
    )

} 
export default search;