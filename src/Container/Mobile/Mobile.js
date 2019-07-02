import React, { Component } from 'react';
import Mob from '../../Component/Mobile/Mobile';
import {firebase} from '../../axios-order';
import classes from './Mobile.module.scss';
import Button from '../../Component/UI/Button/Button';
import Spinner from '../../Component/UI/Spinner/Spinner';
import Backdrop from '../../Component/UI/Backdrop/Backdrop';
import { connect } from 'react-redux';
import Checkout from '../Checkout/Checkout';

class Mobile extends Component {

    state = {
        isLogged: false,
        isLoading: true,
        value: 1,
        showCheckOut: false
    }

    inputHandler =(e) => {
        this.setState({ value : e.target.value})
    }

    orderHandler = () =>  {
        const deviceName = this.props.mobile.DeviceName;

        const data = {
            deviceName,
            amount: this.state.value,
            internal: this.props.mobile.internal,
            date: new Date().toDateString()
        }
        

        this.checkOutHandler()
        
        firebase.post('/orders.json', data).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })

    }

    checkOutHandler = () => {
        this.setState(prevState => ({
            showCheckOut: !prevState.showCheckOut
        }))
    }

    componentDidMount = () => this.handleScroll()

  componentDidUpdate = () => this.handleScroll()

  handleScroll = () => {

    window.scrollTo(0, 0);
    
  }

    render () {
        const mobile = window.location.pathname.substring(1).split('%20').join(' ');

        const data = this.props.mobile


        return (
            <React.Fragment>
                
                <Checkout show={this.state.showCheckOut}
                    amount={this.state.value}
                     onClick={this.checkOutHandler}/>
            
            <Backdrop show={this.props.loading}>
            <Spinner />
            </Backdrop>

            <div className={classes.Mobile}>
                <Mob deviceName={mobile} className={classes.MobileDevice} />
                <div></div>
                <div className={classes.MobileDetail}>
                    <h2 className={classes.MobileDetailName}>{data.DeviceName}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Internal</td>
                                <td>{data.internal || "-"}</td>
                            </tr>
                            <tr>
                                <td>Announced</td>
                                <td>{data.announced || "-"}</td>
                            </tr>
                            <tr>
                                <td>Battery</td>
                                <td>{data.battery_c || "-"}</td>
                            </tr>
                            <tr>
                                <td>Bluetooth</td>
                                <td>{data.bluetooth || "-"}</td>
                            </tr>
                            <tr>
                                <td>Card slot</td>
                                <td>{data.card_slot || "-"}</td>
                            </tr>
                            <tr>
                                <td>Charging</td>
                                <td>{data.charging || "-"}</td>
                            </tr>
                            <tr>
                                <td>Colors</td>
                                <td>{data.colors || "-"}</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>{data.cpu || "-"}</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>{data.dimensions || "-"}</td>
                            </tr>
                            <tr>
                                <td>Edge</td>
                                <td>{data.edge || "-"}</td>
                            </tr>
                            <tr>
                                <td>OS</td>
                                <td>{data.os || "-"}</td>
                            </tr>
                            <tr>
                                <td>Sensors</td>
                                <td>{data.sensors || "-"}</td>
                            </tr>
                            <tr>
                                <td>Sim</td>
                                <td>{data.sim || "-"}</td>
                            </tr>
                            <tr>
                                <td>Front Camera</td>
                                <td>{data.single || "-"}</td>
                            </tr>
                            <tr>
                                <td>Back Camera</td>
                                <td>{data.triple || "-"}</td>
                            </tr>
                            <tr>
                                <td>Network</td>
                                <td>{data.speed || "-"}</td>
                            </tr>
                            <tr>
                                <td>USB</td>
                                <td>{data.usb || "-"}</td>
                            </tr>
                            <tr>
                                <td>Video</td>
                                <td>{data.video || "-"}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{data.weight || "-"}</td>
                            </tr>
                            <tr>
                                <td>Wlan</td>
                                <td>{data.wlan || "-"}</td>
                            </tr>
                            <tr>
                                <td>2G band</td>
                                <td>{data._2g_bands || "-"}</td>
                            </tr>
                            <tr>
                                <td>3G Band</td>
                                <td>{data._3g_bands || "-"}</td>
                            </tr>
                            <tr>
                                <td>4G band</td>
                                <td>{data._4g_bands || "-"}</td>
                            </tr>
                            <tr>
                                <td>Headphone Jack</td>
                                <td>{data._3_5mm_jack || "-"}</td>
                            </tr>
                        </tbody> 
                    </table>
                    <div>
                        <input type="number" 
                            onChange={(e) => this.inputHandler(e)} 
                            value={this.state.value}/>
                        <Button 
                            disabled={!this.props.isAuth} 
                            onClick={this.orderHandler}
                            className={!this.props.isAuth ? classes.cartButton : ''}>Add to Cart</Button>
                    </div>

                </div>
                
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.idToken !== null,
        mobile: state.mobile,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Mobile);