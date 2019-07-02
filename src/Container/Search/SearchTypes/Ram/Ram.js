import React from 'react';
import Modal from '../../../../Component/UI/Modal/Modal';
import classes from '../../../Search/Modal.module.scss';

const ram = (props) => {
    
    return (
        <Modal className={classes.Modal} show modalClosed={props.close}>

            <h2>Search By Ram</h2>
            <div className={classes.List}>
                <ul className={classes.ListItems}>
                    <li className={classes.ListItem}><h3>512 MB Ram</h3></li>
                    <li className={classes.ListItem}><h3>1 Gb</h3></li>
                    <li className={classes.ListItem}><h3>4 Gb</h3></li>
                </ul>
                <ul className={classes.ListItems}>
                    <li className={classes.ListItem}><h3>2 Gb</h3></li>
                    <li className={classes.ListItem}><h3>6 Gb</h3></li>
                </ul>
            </div>
        </Modal>
    )
}

export default ram;