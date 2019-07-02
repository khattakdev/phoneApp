import React from 'react';
import classes from './Mobile.module.scss';
import image from '../../phone.png'


const mobile = (props) => (
 
        <div className={[classes.Box, props.className].join(' ')} onClick={props.onClick}>
            <img src={image} alt="Mobile Phone" className={classes.BoxImage}/>
            <h3 className={classes.BoxName}>{props.deviceName}</h3>
        </div>
)










// const Mobile = (props) => {


//     return (
//         <div className={classes.Box}>
//             <h3 className={classes.BoxTitle}>{props.deviceName}</h3>
//             <ul className={classes.BoxFeatures}>
//                 <li className={classes.BoxFeature}>
//                     <div className={classes.BoxFeatureName}>Internal</div>
//                     <div className={classes.BoxFeatureValue}>{props.internal}</div>
//                 </li>
//                 <li className={classes.BoxFeature}>
//                     <div className={classes.BoxFeatureName}>Processor</div>
//                     <div className={classes.BoxFeatureValue}>{props.chipset}</div>
//                 </li>
//                 <li className={classes.BoxFeature}>
//                     <div className={classes.BoxFeatureName}>Battery</div>
//                     <div className={classes.BoxFeatureValue}>{props.battery}</div>
//                 </li>
//                 <li className={classes.BoxFeature}>
//                     <div className={classes.BoxFeatureName}>Color</div>
//                     <div className={classes.BoxFeatureValue}>{props.colors}</div>
//                 </li>
//             </ul>
//             <div className={classes.BoxPrice}>
//                 <h3>$ 600</h3>
//             </div>

//             <div className={classes.BoxCart}>
//                 <Button className={classes.Button} onClick={props.onClick}>Add to Cart</Button>
//             </div>
//         </div>
//     )
// }

export default mobile;