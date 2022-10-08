import React from 'react';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO of ABC',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    img: person1,
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'CEO of ABC',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    img: person2,
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'CEO of ABC',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    img: person3,
  },
];

const Testimonials = () => {
  return (
    <div className='container space-y-14 px-10 py-16'>
      <h1 className='text-4xl font-semibold text-white text-center'>
        Testimonials
      </h1>
      <div className='flex flex-col justify-center gap-10 lg:flex-row lg:gap-6'>
        {testimonials.map((item) => (
          <div
            key={item.id}
            className='rounded-lg  hover:scale-105 transition-all duration-500 border-general bg-slate-800  cursor-pointer space-y-4 border p-8 lg:w-96'
          >
            <div>
              <img
                src={item.img}
                alt=''
                className='w-16 h-16 ring-offset-2 mx-auto ring rounded-full'
              />
            </div>
            <h2 className='text-medium text-gray-50 text-0 text-center font-medium'>
              {item.name}
            </h2>
            <p className='text-gray-300'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
