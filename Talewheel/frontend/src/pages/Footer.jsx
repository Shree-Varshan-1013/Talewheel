import "../styles/Footer.css";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaPlane,
} from "react-icons/fa6";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <img src="/img/logoTale.png"/>
                        <p className="small text-muted" style={{marginLeft:"42px"}}>
                            Interactive Storybook
                        </p>
                        <p className="small text-muted mb-0" style={{marginLeft:"42px"}}>
                            &copy; Copyrights. All rights reserved.{" "}
                            <a style={{ color: "white" }} href="#">
                                talewheel.com
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li>
                                <Link to="home" smooth duration={3000}>Home</Link>
                            </li>
                            <li>
                                <a href="#">Get started</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Connect with us</h5>
                        <ul className="list-unstyled text-muted">
                            <li className="flex">
                                <FaLinkedin fontSize={20} />
                                <a style={{ marginLeft: "5px" }} href="https://www.linkedin.com/in/shree-varshan-g/">
                                    Linked In
                                </a>
                            </li>
                            <li className="flex">
                                <FaGithub fontSize={20} />
                                <a style={{ marginLeft: "5px" }} href="https://github.com/Shree-Varshan-1013">
                                    Github
                                </a>
                            </li>
                            <li className="flex">
                                <FaInstagram fontSize={20} />
                                <a style={{ marginLeft: "5px" }} href="https://www.instagram.com/f_r_o_z_e_n_f_l_a_m_e_s1013/">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Newsletter</h5>
                        <p className="small text-muted">
                            Subscribe to us to get latest notifications.
                        </p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    className="btn btn-primary"
                                    id="button-addon2"
                                    type="button"
                                >
                                    <FaPlane />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;