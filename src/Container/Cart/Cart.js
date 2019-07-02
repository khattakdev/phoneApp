import React, { Component } from 'react';
import CartItems from './CartItems/CartItems';
import classes from './Cart.module.scss';
import {firebase} from '../../axios-order';
import Backdrop from '../../Component/UI/Backdrop/Backdrop';
import Spinner from '../../Component/UI/Spinner/Spinner';

class Cart extends Component {
    state = {
        orders: [ ],
        loggedIn: false,
        isLoading: true
    }


    componentDidMount () {
        const arr = [];
        firebase.get('/orders.json').then(response => {

            for(let key in response.data) {
                arr.push(response.data[key])
            }

            this.setState({
                orders: arr,
                isLoading: false
            })
        })

        
    }

    componentWillUnmount() {

    }

    render () {

        const cssClasses = [classes.CheckoutButton];
        const loading = this.state.isLoading === true ? (<Backdrop show>
            <Spinner />
        </Backdrop>) : null;

        
        cssClasses.push(this.state.loggedIn ? "" : classes.DisabledButton);

        return (
            <div className={classes.Cart}>
                <h2>Recent Orders</h2>
                {loading}
                <CartItems orders={this.state.orders} />
            </div>
        )
    }
}

export default Cart;