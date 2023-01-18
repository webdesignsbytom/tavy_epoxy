import React from 'react';
import { useState } from 'react';
import './contactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    typeofset: '',
    size: '',
    material: '',
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { id } = event.target;

    setFormData({
      ...formData,
      typeofset: id,
    });
  };


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
            onClick={(event) => handleChange(event)}
          >
            Table
          </div>
          <div
            className='table__set'
            value='dining-set'
            name='dining-set'
            id='dining-set'
            typeofset='dining-set'
            onClick={(event) => handleChange(event)}
          >
            Dining Set
          </div>
          <div
            className='art__piece'
            value='art'
            name='art'
            id='art'
            typeofset='art'
            onClick={(event) => handleChange(event)}
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
              <label htmlFor='contactName'>contactName:</label>
              <input
                type='text'
                name='contactName'
                id='contactName'
                onChange={handleChange}
                required
              />
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
