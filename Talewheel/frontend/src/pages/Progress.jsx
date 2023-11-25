import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const Progress = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='w-full h-screen'>
            <div className='hidden lg:flex' style={{ width: "100%" }}>
                <div data-aos="zoom-in-right"
                    data-aos-duration="3000">
                    <div>
                        <img src='/img/target.gif' style={{ marginLeft: "70px", marginTop: "50px" }} />
                    </div>
                </div>
                <div style={{ width: "50%", marginTop: "100px", marginLeft: "60px" }}>
                    <div data-aos="zoom-in-left"
                        data-aos-duration="3000">
                        <div style={{ flexDirection: "column" }}>
                            <div>
                                <h1 className='text--gradient text-right'>Track Your Progess</h1>
                            </div>
                            <div style={{ color: "white", display: "flex", justifyContent: "flex-end" }}>
                                <div style={{ width: "70%" }}>
                                    <p style={{ fontSize: "1.3rem", fontWeight: "100", textAlign: "justify" }}>
                                        Tracking your progress is more than just observing milestones,
                                        It involves a reflective gaze at the distance covered,
                                        Embrace the process, celebrate the steps, and let your progress be the map to your aspirations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress