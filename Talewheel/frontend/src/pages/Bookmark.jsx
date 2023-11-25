import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const Bookmark = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div data-aos="zoom-in" data-aos-duration="3000">
                <div className='hidden lg:flex w-full h-120'>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div>
                            <h1 className='text--gradient' >Capture The Moments</h1>
                        </div>
                        <div style={{ display: "flex", margin: "30px" }}>
                            <div style={{ marginRight: "60px" }}>
                                <img src="/img/ghost.png" width={300} />
                            </div>
                            <div>
                                <img src="/img/camera.gif" width={300} />
                            </div>
                        </div>
                        <p style={{ fontSize: "1.3rem", color: "white", margin: "60px" }}>Snap Moments, Bookmark your favourite pages for easy navigation</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:hidden w-full h-120'>
                <div data-aos="zoom-in" data-aos-duration="3000">
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div style={{margin:"10px"}}>
                            <div>
                                <h1 className='text--gradient' style={{ fontSize: "50px", textAlign: "center", lineHeight: "80px" }}>Capture The Moments</h1>
                            </div>
                            <div style={{ display: "flex", margin: "30px" }}>
                                <div style={{ marginRight: "50px" }}>
                                    <img src="/img/ghost.png" width={250} />
                                </div>
                                <div>
                                    <img src="/img/camera.gif" width={250} />
                                </div>
                            </div>
                            <p style={{ fontSize: "1.1rem", color: "white", margin: "50px",textAlign:"center" }}>Snap Moments, Bookmark your favourite pages for easy navigation</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookmark