import React from 'react';
import { useState } from 'react';
import './contactForm.css';
import { formDefaultData, classInitValues } from '../../../utils/FormData';

function ContactForm() {
  const [formData, setFormData] = useState(formDefaultData);
  const [tableSelected, setTableSelected] = useState(classInitValues);
  const [diningSetSelected, setDiningSetSelected] = useState(classInitValues);
  const [artSelected, setArtSelected] = useState(classInitValues);

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
          <form onSubmit={handleSubmit} className='contact__form__actions'>
            <div className='email__container'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleChange}
                required
              />
            </div>

            <div className='name__container'>
              <label htmlFor='contactname'>contactname:</label>
              <input
                type='text'
                name='contactname'
                id='contactname'
                onChange={handleChange}
                required
              />
            </div>

            <div className='colours__container'>
              <label htmlFor='numOfColours'>numOfColours:</label>
              <input
                type='number'
                name='numOfColours'
                id='numOfColours'
                onChange={handleChange}
                required
              />
            </div>

            <div className='material__container'>
              <label htmlFor='material'>material:</label>
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
          </form>
          <div className='data'>
            typeOfSet={formData.typeofset}
            size={formData.size}
            materials={formData.material}
            name={formData.name}
            email={formData.email}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactForm;
