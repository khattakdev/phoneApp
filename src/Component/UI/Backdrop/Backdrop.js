import React from 'react';
import classes from './Backdrop.module.scss'
const backdrop = (props) => (
    props.show ? <div className={[classes.Backdrop, props.otherClass].join(' ')} onClick={props.modalClosed}>{props.children}</div> : null
)

export default backdrop;