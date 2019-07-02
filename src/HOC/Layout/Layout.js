import React from 'react';
import Nav from '../../Component/UI/Navigations/Navigations';
import classes from './Layout.module.scss';

const layout = (props) => {
    
    return (
        <React.Fragment>
        <Nav search={props.search}/>
            <div className={classes.Nav}>
                {props.children}
            </div>
    </React.Fragment>
    )
}
    

export default layout;