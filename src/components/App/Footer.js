import React from 'react'
import {Link} from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import logo from "../../assets/images/logo.png"
import footerMap from "../../assets/images/footer-map.png"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <p>Una solución de <a href="https://domainmx.mx"><b>do&#123;main&#125;</b></a></p>

                            <ul className="social-link">
                                <li>
                                    <OutboundLink to="https://twitter.com/domainmexico" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </OutboundLink>
                                </li>
                                <li>
                                    <OutboundLink to="https://www.linkedin.com/company/do-main" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </OutboundLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>"El Intra"</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/about-us">
                                        IntraVR360
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contáctanos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Recursos</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/services">
                                        Ventajas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">
                                        Testimonios
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Nosotros</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    Prolongación Vasco de Quiroga #3735<br/>CDMX
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+525552523629">(+52)-555252-3629</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:contacto@domainmx.mx">contacto@domainmx.mx</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong>do&#123;main&#125; MX</strong> Derechos reservados </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Política de privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">
                                        Términos y condiciones
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;