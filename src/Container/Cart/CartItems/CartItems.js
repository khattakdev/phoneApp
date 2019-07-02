import React from 'react';
import classes from './CartItems.module.scss';


const cartItems = (props) => (
    <React.Fragment>
                <table className={classes.CartItems}>
                    <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Internal</th>
                        <th>Order Date</th>
                    </tr>
                    
                    {props.orders.map((item, i) => (
                        <tr key={i}>
                        <td>{item.deviceName}</td>
                        <td>{item.amount}</td>
                        <td>{item.internal}</td>
                        <td>{item.date}</td>
                        {/* <td>RAD</td> */}
                    </tr> 
                    ))}
                    </tbody>

                </table>
                
            </React.Fragment>
)
export default cartItems;