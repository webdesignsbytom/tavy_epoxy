import React from 'react';
import { useState } from 'react';
import './contactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
console.log('event', event.target.id);
    const { value, name } = event.target;
    console.log('value', value, 'name', name);
    console.log('formData', formData);

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
          <div className='table__sq' value='table' id='table' onClick={handleChange}>Table</div>
          <div className='table__set'>Dining Set</div>
          <div className='art__piece'>ArtWork</div>
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
        </div>
      </main>
    </div>
  );
}

export default ContactForm;
