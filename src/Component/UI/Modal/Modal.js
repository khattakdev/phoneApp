import React from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {

    const cssClasses = [classes.Modal, props.className]
    return (
        <div>
            <Backdrop show={props.show} modalClosed={props.modalClosed} />
            <div className={cssClasses.join(' ')}
                        style={{
                            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: props.show ? '1': '0'
                        }}> 
                        {/* <span className={classes.Close} onClick={props.modalClosed}>X</span> */}
                    {props.children} 
                    </div>
        </div>
    )
};

export default Modal;