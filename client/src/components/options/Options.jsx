import React from 'react';
import './options.css';

import { Link } from 'react-router-dom';

function Options() {
  return (
    <>
      <section className=''>

        <div className=''>
            
          <div className=''>
            <div className=''>
              <h3>OPTIONS</h3>
            </div>
            <div className=''>
              <p>We have a fully custom product</p>
            </div>
          </div>

          <div className=''>
            <ul>
              <li className=''>
                <Link to='/'>
                    <div className=''>
                        <h6>Materials</h6>
                        <p>Soft, hard, colour, grain</p>
                        <span>Click to see more</span>
                    </div>
                </Link>
              </li>

              <li className=''>
                <Link to='/'>
                    <div className=''>
                        <h6>Colours</h6>
                        <p>Metallic, solid, transparent</p>
                        <span>Click to see more</span>
                    </div>
                </Link>
              </li>

              <li className=''>
                <Link to='/'>
                    <div className=''>
                        <h6>Shape</h6>
                        <p>Custom shapes, dimensions, patterns or stencils</p>
                        <span>Click to see more</span>
                    </div>
                </Link>
              </li>

              <li className=''>
                <Link to='/design'>
                    <div className=''>
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
