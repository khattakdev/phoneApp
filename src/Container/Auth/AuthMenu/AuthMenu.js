import React , { Component } from 'react';
import classes from './AuthMenu.module.scss';
import { Link } from 'react-router-dom';

class authMenu extends Component {

    render () {

        return (
            <div className={classes.AuthMenu} style={{
                display: this.props.show ? 'inline' : 'none',
                opacity: this.props.show ? '1': '0'
            }}> 
                <ul>
                    <li><Link to="/Logout">Logout</Link></li>
                </ul>
        
            </div>
        )
    }
}

export default authMenu;