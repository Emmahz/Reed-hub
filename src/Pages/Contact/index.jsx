export const Contact = () =>{
    return(
 
        <div className="bg-custom flex justify-center items-center py-[20px] lg:pt-[40px] ">
            <div className="lg:w-[1337px]   flex flex-col gap-0">
            <div className=" bg-textcolor lg:mx-[100px]  lg:rounded-none rounded-[10px] lg:py-[102px] lg:px-[95px] lg:h[700px] flex lg:flex-row flex-col ">
                <div className="text-custom lg:text-left text-center">
                    <h1 className="font-semibold lg:text-[40px]">Contacts Us</h1>
                    <p className="lg:text-[25px] lg:p-0 px-4">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            <form className="lg:w-[512px] flex flex-col gap-3 lg:gap-0 lg:px-[34px] mx-auto p-4 lg:py-[30px] lg:bg-primary lg:h-[419px] lg:shadow-lg text-custom font-semibold lg:text-[18px]" action="">
                <fieldset className="flex gap-3  lg:flex-row flex-col lg:gap-10">
                    <div>
                <label htmlFor="fname">First Name*</label> <br />
                <input className="lg:w-[180px] text-primary px-[10px] form lg:h-[52px]" type="text"  id="fname" name="fname"  /> <br />
                </div>
                <div>
                <label htmlFor="lname">Last Name*</label> <br />
                <input className="lg:w-[227px] text-primary px-[10px] form lg:h-[52px]" type="text"  id="lname" name="lname"  /> <br />
                </div>
                </fieldset>

<fieldset>

<label htmlFor="email">Email*</label><br />
<input   className="lg:w-[444px] text-primary px-[10px] form lg:h-[56px]" type="email" id="email" name="email"  /> <br />
</fieldset>

<fieldset>
<label htmlFor="message">What can we help you with?</label><br />
<input  className="lg:w-[444px] text-primary px-[10px] form lg:h-[56px]"  type="text" id="message" name="massage"  /> <br />
</fieldset>

<input className="lg:w-[180px] w-[100px] text-primary  lg:p-0 p-2 lg:mt-7 lg:rounded-[10px] font-semibold mt-3 lg:text-[20px] bg-custom lg:h-[52px]" type="submit" value="Submit"/>

            </form>
            </div>
            <div className="bg-primary lg:mx-[100px] lg:h-[50px]">

            </div>
            </div>
        </div>

    );
};


// export default Contact;