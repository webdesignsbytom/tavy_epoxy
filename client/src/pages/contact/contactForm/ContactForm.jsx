import React from 'react';
import { useState } from 'react';
import './contactForm.css';
import { formDefaultData, classInitValues } from '../../../utils/FormData';

function ContactForm() {
  const [formData, setFormData] = useState(formDefaultData);
  const [tableSelected, setTableSelected] = useState(classInitValues);
  const [diningSetSelected, setDiningSetSelected] = useState(classInitValues);
  const [artSelected, setArtSelected] = useState(classInitValues);
  const [selectedFile, setSelectedFile] = useState('No file selected');
  const [measurementSelected, setMeasurementSelected] = useState('mm');

  console.log('selected file', selectedFile);

  const selectSetType = (event) => {
    const { id } = event.target;
    console.log('xxx', event.target.className);

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

  const handleSubmit = (event) => {};

  return (
    <div className='contact__container'>
      <main className='contact__form'>
        <div className='order__options'>
          <div className='misc__title'>SELECT</div>
          <div
            className={tableSelected}
            value='table'
            name='table'
            id='table'
            onClick={(event) => selectSetType(event)}
          >
            Table
          </div>

          <div
            className={diningSetSelected}
            value='dining-set'
            name='dining-set'
            id='dining-set'
            onClick={(event) => selectSetType(event)}
          >
            Dining Set
          </div>
          <div
            className={artSelected}
            value='art'
            name='art'
            id='art'
            onClick={(event) => selectSetType(event)}
          >
            ArtWork
          </div>
        </div>

        <div className='form__container'>
          <div className='upper__container'>
            <article className='contact__heading__container'>
              <div className='contact__title'>
                <h2>CONTACT US</h2>
              </div>
              <div className='contact__subtitle'>
                <p>
                  Reach out to me using the form. Include as much data as you
                  can provide. Upload files with any designs you want to use
                </p>
              </div>
            </article>

            <form onSubmit={handleSubmit} className='contact__form__actions'>
              <div className='name__container'>
                <label htmlFor='contactname'>Contact Name:</label>
                <input
                  type='text'
                  name='contactname'
                  id='contactname'
                  onChange={handleChange}
                  required
                />{' '}
                <span>Required</span>
              </div>

              <div className='email__container'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  onChange={handleChange}
                  required
                />{' '}
                <span>Required</span>
              </div>

              <div className='material__container'>
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

              <div className='style__container'>
                <label htmlFor='style'>Furniture style:</label>
                <select name='style' id='style-select' onChange={handleChange}>
                  <option value=''>--Please choose an option--</option>
                  <option value='striation'>Striations</option>
                  <option value='swirls'>Swirls</option>
                  <option value='galaxy'>Galaxy</option>
                  <option value='cells'>Cells</option>
                </select>
              </div>

              <div className='dimensions__container'>
                <label htmlFor='numOfColours'>Dimensions</label>
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
                <select name='measurementScale' id='measurementScale-select' onChange={handleChange}>
                  <option value='mm'>mm</option>
                  <option value='cm'>cm</option>
                  <option value='in'>in</option>
                </select>
              </div>

              <div className='colours__container'>
                <label htmlFor='numOfColours'>Number of colours:</label>
                <input
                  type='number'
                  name='numOfColours'
                  id='numOfColours'
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='material__container'>
                <label htmlFor='material'>Design Files:</label>
                <input
                  type='file'
                  name='file'
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </div>
            </form>
          </div>

          <div className='response__data'>
            <div className='response__container'>
              <h5 className='response__title'>Contact Name</h5>
              <span className='form__span'>{formData.contactname}</span>
            </div>
            <div className='response__container'>
              <h5 className='response__title'>Email</h5>
              <span className='form__span'>{formData.email}</span>
            </div>
            <div className='response__container'>
              <h5 className='response__title'>Type Of Set</h5>
              <span className='form__span'>{formData.typeofset}</span>
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
          </div>

          <div className='submit__btn'>
            <div className='btn__container'>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactForm;
