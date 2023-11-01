import React from 'react'
import {Link} from 'gatsby'
import aboutImage from '../../assets/images/about/about-img14.png'
import starIcon from '../../assets/images/star-icon.png'
import icon4 from '../../assets/images/icons/icon4.png'
import icon5 from '../../assets/images/icons/icon5.png'
import icon6 from '../../assets/images/icons/icon6.png'
import icon7 from '../../assets/images/icons/icon7.png'
import shape1 from '../../assets/images/shape/circle-shape1.png'
 
const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutImage} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
                                    Nuestra solución
                                </span>
                                <h2>Nuestros clientes usan el sistema desde 2017</h2>
                                <p>Los ramos que incluye son vida, autos, daños, salud, etc. Todos los que estén en la CUSF de la CNSF</p>
                                <ul className="features-list">
                                    <li>
                                        <img src={icon4} alt="banner" />
                                        <h3>6 años</h3>
                                        <p>En el mercado</p>
                                    </li>
                                    <li>
                                        <img src={icon5} alt="banner" />
                                        <h3>100%</h3>
                                        <p>Aceptación en SEIVe</p>
                                    </li>
                                    <li>
                                        <img src={icon6} alt="banner" />
                                        <h3>4,000+</h3>
                                        <p>Reglas de validación</p>
                                    </li>
                                    <li>
                                        <img src={icon7} alt="banner" />
                                        <h3>19</h3>
                                        <p>Años de experiencia en sector asegurador</p>
                                    </li>
                                </ul>
                                <p>La Suite IntraVR360 es una solución para integrar, administrar, validar y automatizar la generación y envío de Reportes Regulatorios a la CNSF</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Características</h3>
                                <p>Algunas de las razones por la que nuestros clientes están satisfechos</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Validación</li>
                                    <li><i className="flaticon-tick"></i> Información estratégica</li>
                                    <li><i className="flaticon-tick"></i> Administración</li>
                                    <li><i className="flaticon-tick"></i> Cumplimiento</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Garantías</h3>
                                <p>Por contrato estamos obligados a cumplir con:</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Reglas actualizadas</li>
                                    <li><i className="flaticon-tick"></i> Validaciones exhaustivas</li>
                                    <li><i className="flaticon-tick"></i> Velocidad de procesamiento</li>
                                    <li><i className="flaticon-tick"></i> Errores 100% legibles</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="about-text">
                                <h3>Otras ventajas</h3>
                                <p>Características que podrían pasar desapercibidas…</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Sin límite de usuarios</li>
                                    <li><i className="flaticon-tick"></i> Multi-empresa</li>
                                    <li><i className="flaticon-tick"></i> Trabajo en simultáneo</li>
                                    <li><i className="flaticon-tick"></i> Validaciones personalizadas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <br/>
                            <br/>
                            <br/>
                            <Link 
                                to="/contact" 
                                activeClassName="active"
                                className="default-btn"
                            >
                                <i className="flaticon-right"></i> Contáctanos <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default AboutUsContent;