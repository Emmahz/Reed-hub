import { Link } from "react-router-dom";
import Logo from '../assets/images/logo-2.png'


const Footer = () => {
    return (
        <div >
            <div className="flex  flex-col-reverse lg:py-[120px] py-[1.5rem] lg:gap-[8rem] text-primary  lg:flex-row  bg-custom w-full  items-center  justify-center">
                <div className="flex px-[20%] items-center lg:text-start text-center  flex-col-reverse lg:flex-row  lg:justify-between w-full lg:items-start ">
                    <div className="mb-[15px]">
                        <h2 className="lg:mb-5 mb-4 font-bold">platform</h2>

                        <ul>
                            <li>
                                <Link to={"/"}>Platform overview</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Platform features</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Journeys</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Date pipeline</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Parcel</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-[15px]">
                        <h2 className="lg:mb-5 mb-4 font-bold">resources</h2>

                        <ul>
                            <li>
                                <Link to={"/"}>Documentations</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Release notes</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Blog</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Community</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Competitors</Link>
                            </li>
                            <li>
                                <Link to={"/"}>API</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Guide</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-[15px]">
                        <h2 className="lg:mb-5 mb-4 font-bold">company</h2>

                        <ul>

                            <li>
                                <Link to={"/"}>About</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Careers</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Support</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Partners</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Start-up programes</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className=" ml-9 pb-[1rem] lg:-mr-[90px] ">
                        {/* <img src={Logo} alt="" /> */}
                        <h1 className=' font-bold  lg:text-[2rem] text-textcolor'>eHub</h1>

                    </div>
                </div>


            </div>
            <div className="bg-underfoot h-[273px]">jj</div>

        </div>
    );
};


export default Footer       