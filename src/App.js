import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import Cart from './Container/Cart/Cart';
import Page from './Container/Page/Page';
import Mobiles from './Container/Mobiles/Mobiles';
import Layout from './HOC/Layout/Layout';
import Mobile from './Container/Mobile/Mobile';
import Logout from './Container/Auth/Logout/Logout';


class App extends Component {

  state = {
    name : '',
    value: 1
  }

  searchHandler = (event) => {
    this.setState({name : event.target.value })
  }

  
  render () {

    return (

     <Layout search={this.searchHandler}>
        <Switch>
          <Route path="/cart" exact component={Cart} />
          {/* <Route path="/" component={<Page />} /> */}
          {/* <Route path="/" exact render={() => (<Page name={this.state.name}/>)}/> */}
          <Route path="/" exact component={Mobiles} />
          <Route path="/Logout" exact component={Logout} />
          <Route path="/:mobile" component={Mobile}/>
        </Switch>
     </Layout>
    )
    }
}

export default App;
