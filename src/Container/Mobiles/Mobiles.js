import React , { Component } from 'react';
import Mobile from '../../Component/Mobile/Mobile';
import classes from './Mobiles.module.scss'
import Backdrop from '../../Component/UI/Backdrop/Backdrop'
import Spinner from '../../Component/UI/Spinner/Spinner'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  * as actions from '../../store/actions';
import img from '../../hero.jpg'

class Mobiles extends Component {

    state = {
        mobiles: [ ],
        isLoading: false
    }

    
   
    componentDidMount () {

        if(this.props.mobiles.length === 0) {
            this.props.fetchMobiles();
        }

    }

    componentDidUpdate () {
        if(this.state.name !== this.props.name) {
            this.setState({name: this.props.name})
          }
    }

    render () {

        // const loading = this.props.loading === true ? () : null;


        const mobileData = this.props.mobiles.filter(mob => {
            return mob.DeviceName.includes(this.props.name);
        })
    
        let mobiles = [];
    
        for(let i = 0; i < mobileData.length; i+= 3) { 
           let items = [];
           for(let j = i; j < i + 3; j++) {
               if(j < mobileData.length) {
                const { DeviceName} = mobileData[j];

                    items.push( 
                        <div key={DeviceName} className={`col col-md-4 col-sm-12 ${classes.mobile}`}>
                       <Link to={DeviceName}>
                        < Mobile 
                            
                            deviceName={DeviceName}
                            onClick={(mobile) => this.props.saveMobile(mobileData[j])}/>
                       </Link>
                            
                        </div>
    
                    )
                
               }
               
               
           }
           mobiles.push( <div key={i} className={`row ${classes.row}`}>
                   {items}
               </div>)
        }
        return (
            <React.Fragment>
                {/* <img src={img} className={classes.HeroImg} /> */}
                <div className="container">
                    {/* {loading} */}
                    <Backdrop show={this.props.loading}>
                        <Spinner />
                    </Backdrop>
                    {mobiles}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        mobiles: state.mobiles,
        loading: state.loading,
        name: state.name
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchMobiles: () => dispatch(actions.fetchMobiles()),
        saveMobile: (mobile) => dispatch(actions.saveMobile(mobile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobiles);

// mobiles: [
//     {
//         Brand: "Xiaomi" ,
//         DeviceName: 'xiaomi Mi', 
//         chipset: "AMD" , 
//         internal: "16 GB",
//         ram: "2 GB", 
//         battery_c: "3200 maH", 
//         colors: "Blue, Green"
//     },
//     {
//         Brand: "Oppo" ,
//         DeviceName: 'oppo A3s', 
//         chipset: "AMD" , 
//         internal: "32 GB",
//         ram: "3 GB", 
//         battery_c: "4200 maH", 
//         colors: "Blue, Green"
//     },
//     {
//         Brand: "Nokia" ,
//         DeviceName: 'nokia 1112', 
//         chipset: "AMD" , 
//         internal: "16 GB",
//         ram: "512 MB", 
//         battery_c: "5000 maH", 
//         colors: "Blue, Green"
//     },
//     {
//         Brand: "Samsung" ,
//         DeviceName: 'samsung s8', 
//         chipset: "AMD" , 
//         internal: "16 GB",
//         ram: "4 GB", 
//         battery_c: "4200 maH", 
//         colors: "Blue, Green"
//     },