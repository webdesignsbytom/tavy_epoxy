import React from 'react';
import { useState } from 'react';
import './contactForm.css';
import { formDefaultData } from '../../../utils/FormData';

function ContactForm() {
  const [formData, setFormData] = useState(formDefaultData);


  const selectSetType = (event) => {
    const { id } = event.target;
console.log('xxx', event.target.className)

event.target.className += ' newTest'
    setFormData({
      ...formData,
      typeofset: id,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('name', name, value);
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {};
  return (
    <div className='contact__container'>
      <main className='contact__form'>
        <div className='order__options'>
          <div
            className='table__sq'
            value='table'
            name='table'
            id='table'
            typeofset='table'
            onClick={(event) => selectSetType(event)}
          >
            Table
          </div>
          <div
            className='table__set'
            value='dining-set'
            name='dining-set'
            id='dining-set'
            typeofset='dining-set'
            onClick={(event) => selectSetType(event)}
          >
            Dining Set
          </div>
          <div
            className='art__piece'
            value='art'
            name='art'
            id='art'
            typeofset='art'
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
              <select name='material' id='material-select' onChange={handleChange}>
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
