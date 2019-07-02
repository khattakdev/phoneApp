import React , {Component} from 'react';
import Backdrop from '../../Component/UI/Backdrop/Backdrop';
import Modal from '../../Component/UI/Modal/Modal';
import classes from './Auth.module.scss';
import Button from '../../Component/UI/Button/Button';
import Input from '../../Component/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { updateObject, checkValidity } from '../../shared/utitlies';
import { Redirect} from 'react-router';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: 'test@test.com',
                validation: {
                    isRequired: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '12345678',
                validation: {
                    isRequired: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        })
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    changeAuthHandler = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isSignUp: !prevState.isSignUp
        }))
    }

    preventHandler = (e) => {
        e.preventDefault();
    }

    render () {

        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let redirect = '';

        if(this.props.isAuth) {
           redirect = <Redirect to="/" />
        }


        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );
        return (
            <React.Fragment>
                {redirect}
                <Backdrop show={this.props.show} modalClosed={this.props.modalClosed}/>
                <Modal className={classes.Modal} show={this.props.show} modalClosed={this.props.modalClosed}>
                    <h2>Authentication</h2>
                        <form className={classes.ModalForm} >
                            {form}
                            <Button onClick={(e) => this.submitHandler(e) }>{this.state.isSignUp ? "Sign Up": "Log In"}</Button>
                            <Button onClick={(e) => this.changeAuthHandler(e)}>Switch To Sign Up/In</Button>
                            </form>
                </Modal>
            </React.Fragment>

        )

    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, signup) => dispatch(actions.auth(email, password, signup))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);