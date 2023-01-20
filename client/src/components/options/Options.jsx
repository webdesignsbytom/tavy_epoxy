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
              <p>We have a fully custom product</p>
            </div>
          </div>

          <div className='list__container'>
            <ul>
              <li className='white__option'>
                <Link to='/'>
                    <div className='data__container'>
                        <h6>Materials</h6>
                        <p>Soft, hard, colour, grain</p>
                        <span>Click to see more</span>
                    </div>
                </Link>
              </li>

              <li className='white__option'>
                <Link to='/'>
                    <div className='data__container'>
                        <h6>Colours</h6>
                        <p>Metallic, solid, transparent</p>
                        <span>Click to see more</span>
                    </div>
                </Link>
              </li>

              <li className='white__option'>
                <Link to='/'>
                    <div className='data__container'>
                        <h6>Shape</h6>
                        <p>Custom shapes, dimensions, patterns or stencils</p>
                        <span>Click to see more</span>
                    </div>
                </Link>
              </li>

              <li className='black__option'>
                <Link to='/design'>
                    <div className='data__container'>
                        <h6>Design Now</h6>
                        <p>Use the design tools to create</p>
                        <span>Click to see more</span>
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
