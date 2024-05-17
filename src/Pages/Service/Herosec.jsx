import img1 from '../../assets/images/service-1.png'
import img2 from '../../assets/images/service-2.png'
import img3 from '../../assets/images/service-3.png'
import img4 from '../../assets/images/service-4.png'
import img5 from '../../assets/images/service-5.png'

const Herosec = () =>{
    return(
<div className='flex flex-col lg:flex-row lg:px-[5rem] px-[2rem] py-5 lg:py-[7rem] lg:overflow-hidden bg-mint text-primary justify-between '>
    <div>
        <h1  className='font-bold lg:leading-[74px] text-[35px] lg:text-[70px]'>We are creatives, <br  className='hidden lg:block'/> 
        of course we provide <br className='hidden lg:block' />
        <span className='text-custom underline'>Premium services</span> </h1>

        <p className=' text-[19px] lg:leading-[47px] mt-4 mb-4 lg:text-[25px]'>
            Lorem ipsum dolor sit amet consectetur in <br className='hidden lg:block' /> adipisicing elit.
             Doloremque minus distinc <br className='hidden lg:block' /> fugiat debitis!
        </p>

<div className='flex justify-between flex-col lg:flex-row flex-wrap items-start lg:items-center gap-4 w-[600px]'>
    <div className='flex whitespace-nowrap lg:w-[40%] gap-3 items-center'>
        <div className='bg-primary text-custom rounded-[10px] h-[45px] w-[45px] text-center font-bold text-[25px] '>1</div>
        <p className='text-[20px] tracking-[2px]'>Graphic Design</p>
    </div>
    <div className='flex whitespace-nowrap lg:w-[40%] gap-3 items-center'>
        <div className='bg-primary text-custom rounded-[10px] h-[45px] w-[45px] text-center font-bold text-[25px] '>2</div>
        <p className='text-[20px] tracking-[2px]'>Web Development</p>
    </div>
    <div className='flex whitespace-nowrap lg:w-[40%] gap-3 items-center'>
        <div className='bg-primary text-custom rounded-[10px] h-[45px] w-[45px] text-center font-bold text-[25px] ' >3</div>
        <p className='text-[20px] tracking-[2px]'>Digital Art</p>
    </div>
    <div className='flex whitespace-nowrap lg:w-[40%] gap-3 items-center'>
        <div className='bg-primary text-custom rounded-[10px] h-[45px] w-[45px] text-center font-bold text-[25px] '>4</div>
        <p className='text-[20px] tracking-[2px]'>App Development</p>
    </div >
    <div className='flex whitespace-nowrap lg:w-[40%] gap-3 items-center'>
        <div className='bg-primary text-custom rounded-[10px] h-[45px] w-[45px] text-center font-bold text-[25px] '>5</div>
        <p className='text-[20px] tracking-[2px]'>Brand Identity</p>
    </div>
    <div className='flex whitespace-nowrap lg:w-[40%] gap-3 items-center'>
        <div className='bg-primary text-custom rounded-[10px] h-[45px] w-[45px] text-center font-bold text-[25px] '>6</div>
        <p className='text-[20px] tracking-[2px]'>Content Creation</p>
    </div>
    <div className='flex whitespace-nowrap lg:w-[40%] gap-3 items-center'>
        <div className='bg-primary text-custom rounded-[10px] h-[45px] w-[45px] text-center font-bold text-[25px] '>7</div>
        <p className='text-[20px] tracking-[2px]'>Digital Marketing</p>
    </div>
</div>

    </div>

<div className='lg:relative lg:-right-[11em]'>

   
   <div className=' lg:absolute z-20 hidden lg:block '>
   <img className='lg:w-[70%]' src={img1} alt="" />
   </div>
   
   <div className=' lg:right-[9rem] lg:top-[14rem] py-5 lg:py-0  lg:relative '>
    <img className='lg:w-[70%]'  src={img2} alt="" />
    </div>
</div>

</div>
    );
};


export default Herosec