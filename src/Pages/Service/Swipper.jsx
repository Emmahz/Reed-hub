import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img5 from '../../assets/images/service-5.png'
import next1 from '../../assets/images/next-1.png'
import next2 from '../../assets/images/next-2.png'


const Swipper =() => {
    return(





<div className='slidder lg:py-0 py-9  lg:h-full'>
<div className='flex items-center  justify-between lg:h-full  lg:px-[5rem]'>
    <div className='flex lg:mt-auto mb-auto  lg:h-full'>
<img src={next2} alt="" />
    </div>


    <div className='flex lg:items-center flex-col lg:flex-row lg:justify-center lg:gap-[6rem]'>
    <div className=' flex justify-center lg:mb-0 mb-4 items-center '>
        <img className='lg:w-[100%] w-[30%]  lg:rounded-none rounded-[50%]' src={img5} alt="" />
    </div>

    <div className='lg:w-[35%] opac flex md:ml-[3rem] lg:flex-col sm:justify-center flex-col rounded-[0.6rem] lg:py-[6rem] lg:rounded-[31px] lg:px-[3rem] text-primary w-[300px] lg:h-[700px]'>
        <h1 className=' lg:text-start  text-center font-semibold lg:mb-5 text-primary text-[30px]'>
        Brand Identity for a Furniture
Company
        </h1>
<p className='lg:text-[25px] lg:text-start text-center  lg:leading-[40px]'>
    <q className='lg:text-[25px]'>
    Lorem ipsum dolor sit amet consectetur.
     In magna donec tortor tortor egestas et enim semper. .
     Ut lectus orci dictum ut in enim scelerisque sagittis vivamus.
    </q>
</p>

<p className='lg:text-[25px] lg:mt-[50px] lg:text-start  text-center text-primary'>
    <span className='font-bold lg:text-[30px]'>Ayomide Jacob</span> <br />
    CEO, L.Dano & Co
</p>

    </div>
    </div>


    <div className='flex lg:mt-auto mb-auto lg:py-8 lg:h-full'>
        <img src={next1} alt="" />
    </div>
</div>
</div>
    );
};


export default Swipper;