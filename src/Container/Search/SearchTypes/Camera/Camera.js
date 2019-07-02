import React from 'react';
import Modal from '../../../../Component/UI/Modal/Modal';
import classes from '../../../Search/Modal.module.scss';

const camera = (props) => {
    
    return (
        <Modal className={classes.Modal} show modalClosed={props.close}>

            <h2>Search By Camera</h2>
            <div className={classes.List}>
                <ul className={classes.ListItems}>
                    <li className={classes.ListItem}  onClick={() => props.onClick("VGA")}><h3>VGA</h3></li>
                    <li className={classes.ListItem}  onClick={() => props.onClick("1 MP")}><h3>1 MP</h3></li>
                    <li className={classes.ListItem}  onClick={() => props.onClick("3 MP")}><h3>3 MP</h3></li>
                    <li className={classes.ListItem}  onClick={() => props.onClick("9 MP")}><h3>9 MP</h3></li>
                </ul>
                <ul className={classes.ListItems}>
                    <li className={classes.ListItem}  onClick={() => props.onClick("1.3 MP")}><h3>1.3 MP</h3></li>
                    <li className={classes.ListItem}  onClick={() => props.onClick("5 MP")}><h3>5 MP</h3></li>
                    <li className={classes.ListItem}  onClick={() => props.onClick("10 MP")}><h3>10 MP</h3></li>
                    <li className={classes.ListItem}  onClick={() => props.onClick("16 MP")}><h3>16 MP</h3></li>
                </ul>
            </div>
        </Modal>
    )
}

export default camera;