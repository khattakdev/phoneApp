import React from 'react';
import Modal from '../../../../Component/UI/Modal/Modal';
import classes from '../../../Search/Modal.module.scss';


const company = (props) => {
    
    return (
        <Modal className={classes.Modal} show modalClosed={props.close}>

            <h2>Search By Brands</h2>
            <div className={classes.List}>
                <ul className={classes.ListItems}>
                    <li className={classes.ListItem} onClick={() => props.onClick("Xiaomi")}><h3>Xiaomi</h3></li>
                    <li className={classes.ListItem} onClick={() => props.onClick('Samsung')}><h3>Samsung</h3></li>
                    <li className={classes.ListItem} onClick={() => props.onClick('Apple')}><h3>Apple</h3></li>
                    <li className={classes.ListItem} onClick={() => props.onClick('Nokia')}><h3>Nokia</h3></li>
                </ul>
                <ul className={classes.ListItems}>
                    <li className={classes.ListItem} onClick={() => props.onClick('Huawei')}><h3>Huawei</h3></li>
                    <li className={classes.ListItem} onClick={() => props.onClick('Vivo')}><h3>Vivo</h3></li>
                    <li className={classes.ListItem} onClick={() => props.onClick('Oppo')}><h3>Oppo</h3></li>
                    <li className={classes.ListItem} onClick={() => props.onClick('Lenovo')}><h3>Lenovo</h3></li>
                </ul>
            </div>
        </Modal>
    )
}

export default company;