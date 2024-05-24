import about2 from "../../assets/images/about-2.png"

const Sec2 =() => {
    return (
        <>
        <div className='container flex lg:flex-row-reverse flex-col justify-center w-screen gap-[4.4rem] items-center mt-[3rem]'>
    <div class=''>
        
    <p className='text-[#35caaa83] font-extrabold text-center text-xl lg:mr-[26rem]'>Our Approach</p>
        <p className='text-[#E3FFCC] lg:text-left text-center lg:px-0 px-[10px]  lg:leading-[2rem] '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br className="lg:block hidden" />
            ipsum quae tenetur totam exercitationem quam architecto nulla <br className="lg:block hidden" />
            sapiente assumenda cum. Laborum culpa quidem tempore eius veniam <br className="lg:block hidden" />
            libero adipisci molestias quisconsequatur modi? Est, a magnam? Non,<br className="lg:block hidden" />
            ratione praesentium voluptatibus laudantium ipsa, mollitia,<br className="lg:block hidden" />
            illo dolores iure nemo in aspernatur aliquam dignissimos.
        </p>
    </div>
        <img className='lg:w-[40%] w-[90%]' src={about2} />
</div>
        </>
    )
};
export default Sec2