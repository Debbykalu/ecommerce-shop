import React from 'react';
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className=' h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center'>
              <div className='w-10 h-[2px] bg-orange-500 mr-3'></div>New Clothing Line
          </div>
          <h3 className='text-[50px] leading-[1.1] font-light mb-4'>DEBBYSCONTY FASHION LINE <br />
          <span className='font-semibold'>BOTH MEN AND WOMEN</span>
          </h3>
          <Link 
          to={'/'}
          className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Find Out More 
          </Link>
      </div>
      <div>
        <img src={WomanImg} alt='' />
      </div>
    </div>
    </section>;
};

export default Hero;
