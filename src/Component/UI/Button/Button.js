import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {

    const cssClasses = [classes.Button, props.className ]; 
    return (
        <button disabled={props.disabled} className={cssClasses.join(' ')} onClick={props.onClick}>{props.children}</button>
        
    )
};

export default Button;