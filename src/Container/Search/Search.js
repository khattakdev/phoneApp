import React , { Component } from 'react';
import SearchBar from '../../Component/SearchBar/SearchBar';
import classes from './Search.module.scss';

class Search extends Component {

    state = {
        modalShow: false,
        modal: '',
        types: {
            Company: false,
            Ram: true,
            Storage: false,
            Camera: false,
            modal: ''
        }
    }

    // modalCloseHandler = () => {
    //     this.setState({modal: ''});
    // }

    // modalOpenHandler = (modalType) => {
       
    //     switch(modalType) {
    //         case "Brand":
    //     this.setState({modal: <Company close={this.modalCloseHandler} />})
    //             break;
    //         case "Ram":
    //             this.setState({modal: <Ram close={this.modalCloseHandler}/>})
    //             console.log('Ram');
    //             break;
    //         case "Storage":
    //             this.setState({modal: <Storage close={this.modalCloseHandler}/>})
    //             break;
    //         case "Camera":
    //             this.setState({modal: <Camera close={this.modalCloseHandler}/>})
    //             break;
    //     }
    // }


   
    render () {
       
        
        return (
            <div className={classes.Search}>
                
                {this.props.modal }
                <SearchBar >
                <li className={classes.SearchType} onClick={() => this.props.modalOpen("Brand")}>Search by Brand</li>
                <li className={classes.SearchType} onClick={() => this.props.modalOpen("Ram")}>Search by RAM</li>
                <li className={classes.SearchType} onClick={() => this.props.modalOpen("Storage")}>Search by Storage</li>
                <li className={classes.SearchType} onClick={() => this.props.modalOpen("Camera")}>Search by Camera</li>
                <li className={classes.SearchType}><form>
                    <input type="text" className={classes.SearchTypeInput} onChange={this.props.search} />
                    </form></li>
                </SearchBar>

            </div>
        )
    }
}

export default Search;