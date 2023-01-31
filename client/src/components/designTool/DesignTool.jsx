import React, { useEffect, useState } from 'react';
import './designTool.css';

function DesignTool() {
  const [designDimensions, setDesignDimensions] = useState({
    dimensionX: 100,
    dimensionY: 100,
    dimensionZ: 0,
  });
  const [designRenderings, setDesignRenderings] = useState({
    height: designDimensions.dimensionX,
    width: designDimensions.dimensionY,
  });

  const handleChange = (event) => {
    console.log('inut');
    const { value, name } = event.target;
    console.log('event', value, name);

    setDesignDimensions({
      ...designDimensions,
      [name]: value,
    });
  };

  useEffect(() => {
    const myComponentStyle = {
      height: designDimensions.dimensionX,
      width: designDimensions.dimensionY,
    };

    setDesignRenderings(myComponentStyle);
  }, [designDimensions]);

  return (
    <section className='designTool__container'>
      <div className='designTool__titles'>
        <div className='title'>
          <h2>Design Tool</h2>
        </div>
        <div className='subtitle'>
          Use ths tool to create a rough design. Include your dimensions and
          styles.
        </div>
      </div>

      <div className='tool__container'>
        <div className='outer__container'>
          <div className='tool__canvas'>
            <div className='table__top' style={designRenderings}></div>
          </div>

          <div className='tool__info'>
            <div className='info__title'>Enter your design</div>

            <div className='design__form'>
              <label htmlFor='material'>Furniture material:</label>
              <select
                name='material'
                id='material-select'
                onChange={handleChange}
              >
                <option value=''>--Please choose an option--</option>
                <option value='oak'>Oak</option>
                <option value='mdf'>MDF</option>
                <option value='ash'>Ash</option>
              </select>

              <label htmlFor='numOfColours'>Dimensions:</label>
              <div className='dimension__inputs'>
                <input
                  type='number'
                  name='dimensionX'
                  id='dimensionX'
                  min={0}
                  onChange={handleChange}
                />
                <span>x</span>
                <input
                  type='number'
                  name='dimensionY'
                  id='dimensionY'
                  min={0}
                  onChange={handleChange}
                />
                <span>y</span>
                <input
                  type='number'
                  name='dimensionZ'
                  id='dimensionZ'
                  min={0}
                  onChange={handleChange}
                />{' '}
                <span>z</span>
                <select
                  name='measurementScale'
                  id='measurementScale-select'
                  onChange={handleChange}
                >
                  <option value='mm'>mm</option>
                  <option value='cm'>cm</option>
                  <option value='in'>in</option>
                </select>
              </div>
            </div>

            <div className="estimateContainer">
              <div className="total__cost">£1000</div>
              <div className="total__time">4 weeks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignTool;
