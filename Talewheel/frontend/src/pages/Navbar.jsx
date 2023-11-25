import { FaBars, FaTimes } from "react-icons/fa";
import GradientBtn from './GradientBtn'

const Navbar = ({ isMenuShown, setIsMenuShown }) => {

    const links = [
        {
            "id": "home",
            "name": "Home"
        },
        {
            "id": "about",
            "name": "About"
        },
        {
            id: "contact",
            name: "Contact"
        }
    ];

    return (
        <>
            <div className='absolute w-full h-20 bg-thBlack text-white z-20'>
                <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full'>
                    <div>
                        <img src="/img/logoTale.png" width={200} />
                    </div>
                    <div className='hidden lg:flex items-center'>
                        <ul className='flex'>
                            <li className='inline-block self-center mx-4'>About</li>
                            <li className='inline-block self-center mx-4'>Contact</li>
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
                    {
                        links.map((link) => {
                            return (
                                <li className="m-5 cursor-pointer" key={link.id}>{link.name}</li>
                            );
                        })
                    }
                    <GradientBtn title="Login" />
                </ul>
            </div>
        </>
    )
}

export default Navbar