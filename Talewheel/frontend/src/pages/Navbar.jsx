import { FaBars, FaTimes } from "react-icons/fa";
import GradientBtn from './GradientBtn'
import { Link } from 'react-scroll';
import { useEffect } from "react";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {

    if (isMenuShown) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        console.log(isMenuShown);
    }


    const links = [
        {
            "id": "home",
            "name": "Home"
        },
        {
            "id": "features",
            "name": "Features"
        },
        {
            id: "contact",
            name: "Contact"
        }
    ];

    return (
        <>
            <div className='w-full h-20 text-white z-20' style={{ position: "sticky", top: "0", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full'>
                    <div>
                        <Link to="home" smooth duration={3000}>
                            <img src="/img/logoTale.png" width={200} />
                        </Link>
                    </div>
                    <div className='hidden lg:flex items-center'>
                        <ul className='flex'>
                            <li className='inline-block self-center mx-4'>
                                <Link to="features" smooth duration={3000}>
                                    Features
                                </Link>
                            </li>
                            <li className='inline-block self-center mx-4'>
                                <Link to="contact" smooth duration={3000}>Contact</Link>
                            </li>
                            <GradientBtn title="Login" />
                        </ul>
                    </div>
                    <div onClick={() => setIsMenuShown(!isMenuShown)}
                        className='block md:hidden cursor-pointer'>
                        {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
            </div>
            <div className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"}`}>
                <ul>


                    <li className="m-5 cursor-pointer" key="features">
                        <Link to="features" smooth duration={3000}>
                            Features
                        </Link>
                    </li>
                    <li className="m-5 cursor-pointer" key="contact">
                        <Link to="contact" smooth duration={3000}>
                            Contact
                        </Link>
                    </li>


                    <GradientBtn title="Login" />
                </ul>
            </div>
        </>
    )
}

export default Navbar