import video from '/videos/heroVideo.mp4';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="hidden md:flex h-25 w-full video-container">
                <div className="backdrop-desktop"></div>
                <video src={video} autoPlay loop muted />
                <div className="overlay-content w-full">
                    <div style={{ marginTop: '100px' }}>
                        <h1 style={{ fontSize: "100px" }} className='text--gradient'>
                            <Typewriter
                                options={{
                                    strings: ['Talewheel'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </h1>
                    </div>
                    <div>
                        <p className='text-2xl'>Well-written stories designed to capture the reader's imagination</p>
                        <div className='flex justify-center' style={{ paddingTop: '40px' }}>
                            <div style={{width:"180px", margin:"20px"}}>
                            <button className='button-28' onClick={()=> navigate('/sign-in')}>Login</button>
                            </div>
                            <div style={{width:"180px", margin:"20px"}}>
                                <button className='button-27 bg-gradient-to-r from-thBlue to-thYellow' onClick={()=> navigate('/sign-up')}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden h-25 w-full video-container">
                <div className="backdrop-mobile"></div>
                <video src={video} autoPlay loop muted />
                <div className="overlay-content">
                    <h1 style={{ fontSize: "50px" }}>
                        <Typewriter
                            options={{
                                strings: ['Talewheel'],
                                autoStart: true,
                                loop: true,
                                cursor: '|',
                            }} />
                    </h1>
                    <p className='text-left'>Mobile View</p>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
