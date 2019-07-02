import React, { Component } from 'react';
import classes from './Navigations.module.scss';
import Button from '../Button/Button';
import {Link, withRouter } from 'react-router-dom';
import Search from '../Search/Search';
import profileImg from '../../../profile.png';
import Auth from '../../../Container/Auth/Auth'
import AuthMenu from '../../../Container/Auth/AuthMenu/AuthMenu';
import { connect} from 'react-redux';
import * as actions from '../../../store/actions';

class Navigations extends Component {

    state = {
        showAuth: false,
        showMenu: false,
        isSearchEnabled: true
    }

    authHandler = () => {
        if(!this.props.isAuth) {
            this.setState(prevState => ({
                showAuth: !prevState.showAuth
            }))
        } else {
            this.setState(prevState => ({
                showMenu: !prevState.showMenu
            }))

        }
        
    }

    componentDidUpdate () {
        if(this.props.location.pathname === "/" && !this.state.isSearchEnabled) {
            this.setState({
                isSearchEnabled: true
            })
        }

        if(this.props.location.pathname !== "/" && this.state.isSearchEnabled) {
            this.setState({
                isSearchEnabled: false
            })
        }
    }
    

    render () {

        

        return (
            <React.Fragment>

                <Auth show={this.state.showAuth && !this.props.isAuth} modalClosed={() => this.authHandler()} />
            
                
                <div className={classes.Nav}>
                    <h1 className={classes.NavMainText}><Link to="/">Phone App</Link></h1>            
                        <Search className={classes.NavSearch} 
                            search={(e) => this.props.searchName(e)} disabled={!this.state.isSearchEnabled}/>
            
                {this.props.logged ?  <ul className={classes.NavButtonsList}>
                        <li><Button className={classes.NavButtonLogIn} type="text">Go Back</Button></li>
                    </ul> :
                    <ul className={classes.NavButtonsList}>
                    {this.props.isAuth ? 
                    <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li> : null}
                    
                    <li><img src={profileImg} 
                        className={classes.NavProfile} 
                        alt="Person Profile" 
                        onClick={() => this.authHandler()}/></li>
                        <AuthMenu show={this.state.showMenu && this.props.isAuth}/>
                   </ul>
            
                }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.idToken  !== null,
        name: state.name,
        token: state.idToken,
        id: state.localID
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AuthUser: () => dispatch({type:'AuthUser'}),
        searchName: (e) => dispatch(actions.searchname(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigations));