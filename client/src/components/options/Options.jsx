import React from 'react';
import './options.css';

import { Link } from 'react-router-dom';

function Options() {
  return (
    <>
      <section className='options__container'>

        <div className='selection__container'>
            
          <div className='options__titles__container'>
            <div className='options__title'>
              <h3>OPTIONS</h3>
            </div>
            <div className='options__subtitle'>
              <p>we have a fully custom product</p>
            </div>
          </div>

          <div className='list__container'>
            <ul>
              <li>
                <Link to='/'>
                    <div className='data__container'>
                        <h6>Materials</h6>
                        <p>Soft, hard, colour, grain</p>
                        <p>Click to see more</p>
                    </div>
                </Link>
              </li>

              <li>
                <Link to='/'>
                    <div className='data__container'>
                        <h6>Colours</h6>
                        <p>Metallic, solid, transparent</p>
                        <p>Click to see more</p>
                    </div>
                </Link>
              </li>

              <li>
                <Link to='/'>
                    <div className='data__container'>
                        <h6>Shape</h6>
                        <p>Custom shapes, dimensions, patterns</p>
                        <p>Click to see more</p>
                    </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Options;
