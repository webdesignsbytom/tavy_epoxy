import React from 'react';
import { useState } from 'react';
import { formDefaultData, classInitValues } from '../../utils/FormData';
// Icons
import CoffeeTable from '../../assets/images/pouf.png';
import TableIcon from '../../assets/images/table.png';
import PaintBrush from '../../assets/images/starry-night.png';

function ContactForm() {
  const [formData, setFormData] = useState(formDefaultData);
  const [tableSelected, setTableSelected] = useState(classInitValues);
  const [diningSetSelected, setDiningSetSelected] = useState(classInitValues);
  const [artSelected, setArtSelected] = useState(classInitValues);
  const [selectedFile, setSelectedFile] = useState('No file selected');
  const [measurementSelected, setMeasurementSelected] = useState('mm');

  const selectSetType = (event) => {
    const { id } = event.target;

    if (id === 'table') {
      setTableSelected('selected__sq');
      setDiningSetSelected(classInitValues);
      setArtSelected(classInitValues);
    }

    if (id === 'dining-set') {
      setDiningSetSelected('selected__sq');
      setTableSelected(classInitValues);
      setArtSelected(classInitValues);
    }

    if (id === 'art') {
      setArtSelected('selected__sq');
      setDiningSetSelected(classInitValues);
      setTableSelected(classInitValues);
    }

    setFormData({
      ...formData,
      typeofset: id,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('ji');
  };
  return (
    <section className='grid bg-red-400'>
      {/* Main */}
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-reg'>
          {/* Input */}
          <section className='grid'>
            <section className='grid'>
              <div className=''>SELECT</div>
              <div className={tableSelected}>
                <img
                  className='w-20'
                  src={CoffeeTable}
                  alt='coffee table'
                  value='table'
                  name='table'
                  id='table'
                  onClick={(event) => selectSetType(event)}
                />
              </div>

              <div className={diningSetSelected}>
                <img
                  className='w-20'
                  value='dining-set'
                  name='dining-set'
                  id='dining-set'
                  onClick={(event) => selectSetType(event)}
                  src={TableIcon}
                  alt='coffee table'
                />
              </div>
              <div className={artSelected}>
                <img
                  className='w-20'
                  value='art'
                  name='art'
                  id='art'
                  onClick={(event) => selectSetType(event)}
                  src={PaintBrush}
                  alt='coffee table'
                />
              </div>
            </section>
          </section>

          <section className='grid grid-cols-reg '>
            <section className='grid'>
              {/* TITLES */}
              <section className='grid grid-rows-rev'>
                <article className=''>
                  <div className=''>
                    <h2>CONTACT US</h2>
                  </div>
                  <div className=''>
                    <p>
                      Reach out to me using the form. Include as much data as
                      you can provide. Upload files with any designs you want to
                      use
                    </p>
                  </div>
                </article>

                <section>
                  <div className=''>
                    <div className=''>
                      <label htmlFor='contactname'>Contact Name:</label>
                      <input
                        type='text'
                        name='contactname'
                        id='contactname'
                        onChange={handleChange}
                        required
                      />{' '}
                    </div>

                    <div className=' '>
                      <label htmlFor='email'>Email:</label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        onChange={handleChange}
                        required
                      />{' '}
                    </div>

                    <div className=' material__ontainer'>
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

                    <div className=' '>
                      <label htmlFor='style'>Furniture style:</label>
                      <select
                        name='style'
                        id='style-select'
                        onChange={handleChange}
                      >
                        <option value=''>--Please choose an option--</option>
                        <option value='striation'>Striations</option>
                        <option value='swirls'>Swirls</option>
                        <option value='galaxy'>Galaxy</option>
                        <option value='cells'>Cells</option>
                      </select>
                    </div>

                    <div className=' '>
                      <label htmlFor='numOfColours'>Dimensions</label>
                      <div className=''>
                        <input
                          type='number'
                          name='dimensionX'
                          id='dimensionX'
                          onChange={handleChange}
                        />{' '}
                        <span>x</span>
                        <input
                          type='number'
                          name='dimensionY'
                          id='dimensionY'
                          onChange={handleChange}
                        />{' '}
                        <span>y</span>
                        <input
                          type='number'
                          name='dimensionZ'
                          id='dimensionZ'
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

                    <div className='form__grid__container colours__container'>
                      <label htmlFor='numOfColours'>Number of colours:</label>
                      <input
                        type='number'
                        name='numOfColours'
                        id='numOfColours'
                        onChange={handleChange}
                      />
                    </div>

                    <div className='form__grid__container material__container'>
                      <label htmlFor='file'>Design Files:</label>
                      <input
                        type='file'
                        name='file'
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                    </div>
                  </div>

                  <section className=''>
                    <div className=''>
                      <input type='submit' value='Submit!' />
                    </div>
                  </section>
                </section>
              </section>
            </section>

            {/* Response */}
            <section className='grid w-fit'>
              <div className=''>
                <h5 className=''>Contact Name</h5>
                <span className=''>{formData.contactname}</span>
              </div>
              <div className=''>
                <h5 className=''>Email</h5>
                <span className=''>{formData.email}</span>
              </div>
              <div className=''>
                <h5 className=''>Type Of Set</h5>
                <span className=''>{formData.typeofset}</span>
              </div>
              <div className='response__container'>
                <h5 className='response__title'>Material</h5>
                <span className='form__span'>{formData.material}</span>
              </div>
              <div className='response__container'>
                <h5 className='response__title'>Colour amount</h5>
                <span className='form__span'>{formData.numOfColours}</span>
              </div>
              <div className='response__container'>
                <h5 className='response__title'>Size</h5>
                <span className='form__span'>
                  Length {formData.dimensionX} * Width {formData.dimensionY} *
                  Height {formData.dimensionZ} {formData.measurementScale}
                </span>
              </div>
              <div className='response__container'>
                <h5 className='response__title'>File name</h5>
                <span className='form__span'>{formData.style}</span>
              </div>
              <div className='response__container'>
                <h5 className='response__title'>File name</h5>
                <span className='form__span'>{selectedFile.name}</span>
              </div>
            </section>
          </section>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
