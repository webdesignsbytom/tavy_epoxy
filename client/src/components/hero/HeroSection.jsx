import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [clickedContinue, setClickedContinue] = useState(null);

  return (
    <header className='absolute h-screen bg-main-bg grid w-full bg-cover -z-10'>
      <div className='grid h-screen justify-center items-center'>
        <section className='grid h-2/3 items-center'>
          <article className='text-center'>
            <h1 className='text-5xl font-semibold'>
              TAV-E-<span className=''>POXY</span>
            </h1>
            <h2 className=''>
              Hand-made furniture with a unqiue and stunning epoxy finish
            </h2>
            <div className=''>
              <button className='' id=''>
                <Link
                  href='#display__link'
                  onClick={() => setClickedContinue('#display__link')}
                  className={
                    clickedContinue === '#display__link' ? 'active' : ''
                  }
                >
                  CONTINUE
                </Link>
              </button>
            </div>
          </article>
        </section>
      </div>
    </header>
  );
}

export default HeroSection;
