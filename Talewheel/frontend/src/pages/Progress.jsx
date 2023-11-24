import React from 'react'
const Progress = () => {
    return (
        <div className='w-full h-screen'>
            <div className='hidden lg:flex' style={{ width: "100%" }}>
                <div>
                    <img src='/img/target.gif' style={{ marginLeft: "70px", marginTop: "50px" }} />
                </div>
                <div style={{ width: "50%", marginTop: "100px", marginLeft:"60px" }}>
                    <div style={{ flexDirection: "column" }}>
                        <div>
                            <h1 className='text--gradient text-right'>Track Your Progess</h1>
                        </div>
                        <div style={{ color: "white", display:"flex", justifyContent:"flex-end" }}>
                            <div style={{width: "70%"}}>
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
    )
}

export default Progress