import { useEffect } from 'react';
import video from '/videos/heroVideo.mp4';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const HeroSection = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div data-aos="zoom-out" data-aos-duration="2000">
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
                                <div style={{ width: "180px", margin: "20px" }}>
                                    <button className='button-28' onClick={() => navigate('/sign-in')}>Login</button>
                                </div>
                                <div style={{ width: "180px", margin: "20px" }}>
                                    <button className='button-27 bg-gradient-to-r from-thBlue to-thYellow ' onClick={() => navigate('/sign-up')}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-out" data-aos-duration="2000">
                <div className="flex md:hidden w-full">
                    <div className="backdrop-mobile">
                        <video src={video} autoPlay loop muted style={{minHeight:"100vh", objectFit:"cover"}} />
                        <div className="overlay-content-mobile w-full">
                        <div>
                            <h1 style={{ fontSize: "80px" }} className='text--gradient'>
                                <Typewriter
                                    options={{
                                        strings: ['Talewheel'],
                                        autoStart: true,
                                        loop: true,
                                    }} />
                            </h1>
                        </div>
                        <div>
                            <p style={{fontSize:"20px"}}>Well-written stories designed<br/> to capture the reader's imagination</p>
                            <div className='flex justify-center' style={{ paddingTop: '40px' }}>
                                <div style={{ width: "150px", margin: "20px" }}>
                                    <button className='button-28' onClick={() => navigate('/sign-in')}>Login</button>
                                </div>
                                <div style={{ width: "150px", margin: "20px" }}>
                                    <button className='button-27 bg-gradient-to-r from-thBlue to-thYellow ' onClick={() => navigate('/sign-up')}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
