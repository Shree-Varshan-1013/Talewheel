import React from 'react'

const Features = () => {
    return (
        <div className='w-full h-screen'>
            <div className='hidden lg:flex' style={{width:"100%"}}>
                <div style={{ width: "50%", marginLeft: "90px", marginTop: "100px" }}>
                    <div style={{ flexDirection: "column" }}>
                        <div>
                            <h1 className='text--gradient'>Welcome to the Magical World</h1>
                        </div>
                        <div style={{ color: "white" }}>
                            <p style={{ fontSize: "1.3rem", fontWeight: "100", textAlign: "justify" }}>
                                Step into a realm where imagination reigns supreme,
                                and tales come alive with every turn of the page.
                                Welcome to the enchanting world of stories, a place where words weave their magic,
                                transporting you to distant lands, igniting emotions, and unveiling mysteries beyond imagination.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/img/stars.gif' style={{marginLeft:"60px", marginTop:"50px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Features