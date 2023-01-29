import React from 'react';
import './designTool.css';

function DesignTool() {
  const handleChange = (event) => {
    console.log('inut');
  };

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
          <div className='tool__canvas'></div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignTool;
