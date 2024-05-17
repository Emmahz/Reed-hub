import img3 from '../../assets/images/service-3.png'


const Mid = () => {
    return (
        <div className='bg-custom pb-10 lg:py-[90px] flex flex-col justify-center items-center w-full'>

            <div className='lg:w-[60%] w-full'>
                <img src={img3} alt="" />
            </div>

            <div  className='lg:w-[50%] p-[30px] text-center flex flex-col gap-6'>
                <h1 className='text-white font-semibold lg:text-[45px]'>A Track Record of 

                 <span className=' bg-gradient-to-r from-textcolor  via-linear2 text-transparent bg-clip-text '> Great Results</span></h1>

                <p className='text-primary lg:text-[25px]'> Lorem ipsum dolor sit amet consectetur. In magna donec
                     tortor tortor egestas et enim semper. Curabitur nisi 
                     neque et convallis tristique posuere. Ut lectus orci 
                     dictum ut in enim scelerisque sagittis vivamus. Nunc 
                     auctor luctus a pharetra. Molestie sed ultricies pellentesque
                      convallis platea.</p>

            </div>

        </div>
    );
};


export default Mid;