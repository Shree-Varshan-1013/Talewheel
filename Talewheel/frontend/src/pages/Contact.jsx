import React from 'react';
import { IoIosMail, IoIosPin } from "react-icons/io";
import { TbPhoneFilled } from "react-icons/tb";

const ContactPage = () => {

    const contactMethods = [
        {
            icon: <IoIosPin fontSize={30} />,
            contact: "Sri Krishna College Of Engineering and Technology",
            title: "Address"
        },
        {
            icon: <TbPhoneFilled fontSize={30} />,
            contact: "+91 6366662690",
            title: "Phone"
        },
        {
            icon: <IoIosMail fontSize={30} />,
            contact: "shreevarshang2003@gmail.com",
            title: "Email"
        },
    ]

    return (
        <>
            <div className="hidden lg:flex" style={{ color: "black", backgroundColor: "white", padding: "80px" }} name="contact">
                <div className="w-full mx-auto px-4">
                    <div>
                        <h2 style={{ fontWeight: "900", fontFamily:"nunito" }}>
                            Contact
                        </h2>
                        <h1 style={{ lineHeight: "50px", marginBottom: "10px" }}>
                            Let us know how we can help
                        </h1>
                        <p style={{ marginBottom: "100px" }}>
                            We’re here to help and answer any question you might have, We look forward to <br />hearing from you .
                        </p>
                    </div>
                    <div>
                        <ul className="flex" style={{ cursor: 'none' }}>
                            {
                                contactMethods.map((item, idx) => (
                                    <li key={idx} style={{ cursor: "initial", marginRight: "30px" }}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                {item.icon}
                                            </div>
                                            <h4 style={{ fontWeight: "800", marginLeft: "10px" }}>{item.title}</h4>
                                        </div>
                                        <div className="mt-3 flex items-center gap-x-3">
                                            <p style={{ marginTop: "5px" }}>{item.contact}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden" style={{ color: "black", backgroundColor: "white", padding: "30px" }} name="contact">
                <div name="contact">
                    <div className="w-full mx-auto">
                        <div>
                            <h2 style={{ fontWeight: "700", fontSize: "20px" }}>
                                Contact
                            </h2>
                            <h1 style={{ lineHeight: "50px", marginBottom: "10px", fontSize: "35px" }}>
                                Let us know how we can help
                            </h1>
                            <p style={{ marginBottom: "40px" }}>
                                We’re here to help and answer any question you might have, We look forward to hearing from you .
                            </p>
                        </div>
                        <div>
                            <ul className="flex" style={{ cursor: 'none', flexDirection: "column" }}>
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} style={{ cursor: "initial", marginRight: "30px" }}>
                                            <div style={{ display: "flex" }}>
                                                <div>
                                                    {item.icon}
                                                </div>
                                                <h4 style={{ fontWeight: "800", marginLeft: "6px", fontSize: "20px" }}>{item.title}</h4>
                                            </div>
                                            <div className="mt-3 flex items-center">
                                                <p style={{ marginTop: "1px" }}>{item.contact}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
