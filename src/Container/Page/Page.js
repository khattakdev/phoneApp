import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from '../../Component/Hero/Hero';
// import Search from '../Search/Search';
import Mobiles from '../Mobiles/Mobiles';
import img from '../../hero.jpg'


class Page extends Component {

  // state = {
  //   name: '',
  //   searchBy: '',
  //   searchValue: '',
  //   modal: ''
  // }

//   searchHandler = (event) => {
//     this.setState({name : event.target.value })
//   }

//   modalCloseHandler = () => {
//     this.setState({modal: ''});
// }

// setSearchValue = (value) => {
//   this.setState({searchValue: value})
//   this.modalCloseHandler();
// }
 
  render () {

    
    return (
      <div>
        <img src={img} />
        {/* {this.state.modal} */}
        {/* <Carousel /> */}
        {/* < Search search={this.searchHandler}
          modalOpen={(modalType) => this.modalOpenHandler(modalType)}
          modal={this.state.modal}/> */}
        < Mobiles />
     </div>
    );
  }
}

export default Page;
