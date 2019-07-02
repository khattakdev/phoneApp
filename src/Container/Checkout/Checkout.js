import React, { Component } from 'react';
import Backdrop from '../../Component/UI/Backdrop/Backdrop';
import Modal from '../../Component/UI/Modal/Modal';
import classes from './Checkout.module.scss';
import Button from '../../Component/UI/Button/Button';
import { firebase } from '../../axios-order';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Checkout extends Component {

    state = {
        controls: {
            email: {
                type: 'email',
                isRequired: true,
                value: '',
                placeholder: 'Email'
            },
            name: {
                type: 'name',
                isRequired: true,
                value: '',
                placeholder: 'Name'
            },
            address: {
                type: 'name',
                isRequired: true,
                value: '',
                placeholder: 'Address'
            },
            City: {
                type: 'name',
                isRequired: true,
                value: '',
                placeholder: 'City'
            },
            Country: {
                type: 'name',
                isRequired: true,
                value: '',
                placeholder: 'Country'
            },
        }
    }

    onChangeHandler = (event, formEl) => {
       const updatedObject = {
            ...this.state.controls,
            [formEl] : {
                ...this.state.controls[formEl],
               value: event.target.value
            }
        };
        this.setState({
            controls: updatedObject
        })
    }

    submitHandler = () => {

        const data = {
            deviceName: this.props.mobile.DeviceName,
            amount: this.props.amount,
            internal: this.props.mobile.internal,
            date: new Date().toDateString(),
            userID: this.props.userID
        }

        firebase.post('/orders.json', data).then(response => {
            
            // this.setState({
            //     ordered: true
            // })
        }).catch(err => {
            console.log(err)
        })
    }
    render () {

        let redirect = '';
        if(this.state.ordered) {
            redirect = <Redirect to="/" />
        }

        let formElemetArray = [];
        for(let key in this.state.controls) {
            // console.log(this.state.controls[i])
            formElemetArray.push({
                id: key,
                ...this.state.controls[key] 
            })
        }

        let disabledButton = false;

        let form = formElemetArray.map(formEl => {
            if(formEl.value.trim().length === 0) {
                disabledButton = true
            }
           return  (
                <input 
                    key={formEl.id}
                    type={formEl.type}
                    value={formEl.value}
                    placeholder={formEl.placeholder}
                    onChange={(e) => this.onChangeHandler(e, formEl.id)}
                    required
                     />
                
            )
        })


        return (
            <React.Fragment>
                {redirect}
                <Backdrop show={this.props.show} modalClosed={this.props.onClick}/>
                <Modal show={this.props.show} className={classes.Modal}>
                    <h2>Checkout</h2>
                    <form className={classes.ModalForm}>
                        {form}
                        <Button 
                            className={disabledButton === true ? classes.ModalButton : ''}
                            disabled={disabledButton} 
                            onClick={this.submitHandler}>Order Now</Button>
                    </form>

                </Modal>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        mobile: state.mobile,
        userID: state.userID
    }
}
export default connect(mapStateToProps)(Checkout);