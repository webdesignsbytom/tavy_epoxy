import React from 'react';
import './display.css';
import Legs from '../../assets/images/leg_options.jpg';
import Ex41 from '../../assets/images/4x.png'
import NorthernLights  from '../../assets/images/northern_lights_crop.png'

function Display() {
  return (
    <>
      <section className='display__container'>

        <div className="section1">
          Tav-E-poxy create beautiful, unique and hand-made furniture. Designed to match any style of interior with a huge range of colours and materials available.
        <p>Upload your own design or use our design tool to mock up something based on our available standards</p> 
        <img src={Ex41} alt="Example tiles for epoxy" />
        </div>

        <div className="section2">
        <img src={NorthernLights} alt="Example tiles for epoxy" />
          Epoxy or arcylic can be used to create thousands of designs with a glass smooth finish requiring little up keep, with strong resistance to damage and chipping</div>

        <div className="section3">
          Customise every aspect of the design, we have a huge option of readily available metal or wooden table legs. However if you find your own you prefer we can order anything in to make your dream a reality
          <img src={Legs} alt="Example legs for tables" />

        </div>
        
      </section>

      
    </>
  );
}

export default Display;
