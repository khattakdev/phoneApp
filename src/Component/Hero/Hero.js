import React from 'react';
import mob1 from './images/mob1.jpg';
import mob2 from './images/mob2.jpg';
import classes from './Carousal.module.scss';

const Carousal = (props) => {

    const cssClasses = ['d-block w-100', classes.img];

    return (
       <div className={classes.container}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            
            <div className="carousel-item active">
            <img className={cssClasses.join(' ')} src={mob1} alt="First slide"></img>
            </div>

            <div className="carousel-item">
            <img className={cssClasses.join(' ')} src={mob2} alt="First slide"></img>
            </div>

            <div className="carousel-item">
            <img className={cssClasses.join(' ')} src={mob1} alt="First slide"></img>
            </div>
            </div>
            
        </div>
       </div>
        
    )
}

export default Carousal;
