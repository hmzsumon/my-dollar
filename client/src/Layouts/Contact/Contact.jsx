import React from 'react';

const Contact = () => {
  return (
    <div className='container py-10 px-4 md:px-6'>
      <div className='w-full md:w-96 md:max-w-full mx-auto'>
        <div className='p-6 border border-gray-600 sm:rounded-md bg-slate-800 '>
          <form method='POST' action='https://herotofu.com/start'>
            <label className='block mb-6'>
              <span className='text-gray-300'>Your name</span>
              <input
                name='name'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-600
            border
            px-2
            py-2
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            bg-transparent
            placeholder-gray-600
            text-gray-300
          '
                placeholder='Joe Bloggs'
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-300'>Email address</span>
              <input
                name='email'
                type='email'
                className='
            block
            w-full
            mt-1
            border-gray-600
            border
            px-2
            py-2
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            bg-transparent
            placeholder-gray-600
            text-gray-300
          '
                placeholder='joe.bloggs@example.com'
                required
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-300'>Message</span>
              <textarea
                name='message'
                className='
            block
            w-full
            mt-1
            border-gray-600
            border
            px-2
            py-2
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            bg-transparent
            placeholder-gray-600
            text-gray-300
          '
                rows='3'
                placeholder="Tell us what you're thinking about..."
              ></textarea>
            </label>
            <div className='mb-6'>
              <button
                type='submit'
                className='
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            hover:bg-indigo-800
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            
          '
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
