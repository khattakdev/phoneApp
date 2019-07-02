import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class Logout extends Component {

    componentDidMount () {

        this.props.onLogOut()

    }
    render () {
        return <Redirect to="/" />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);