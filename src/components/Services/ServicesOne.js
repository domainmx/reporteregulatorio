import React from 'react';
import {Link} from 'gatsby'

import StarIcon from '../../assets/images/star-icon.png'
import ServiceIcon1 from '../../assets/images/services/service-icon1.png'
import ServiceIcon2 from '../../assets/images/services/service-icon2.png'
import ServiceIcon3 from '../../assets/images/services/service-icon3.png'
import ServiceIcon4 from '../../assets/images/services/service-icon4.png'
import ServiceIcon5 from '../../assets/images/services/service-icon5.png'
import ServiceIcon6 from '../../assets/images/services/service-icon6.png'

const ServicesOne = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="image" /> 
                        Nuestras ventajas
                    </span>
                    <h2>Ventajas de utilizar nuestro sistema</h2>
                    <p>No sólo se trata de validar archivos.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon1} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/velocidad">
                                    Velocidad de respuesta
                                </Link>
                            </h3>
                            <p>Al tener las respuestas más rápido, puedes reaccionar de mejor manera cuando hay
                                cambios de reservas, de requerimientos, de cálculos, etc.
                            </p>

                            <Link to="/velocidad" className="read-more-btn">
                                Leer Más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon2} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/movilidad">
                                    Movilidad
                                </Link>
                            </h3>
                            <p>Puedes utilizar el sistema -para validar archivos, supervisar el avance, checar otros RRs- desde 
                                cualquier computadora con un navegador (incluso tu teléfono o tablet)
                            </p>
                            
                            <Link to="/movilidad" className="read-more-btn">
                                Leer Más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon3} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/automatizacion">
                                    Automatización
                                </Link>
                            </h3>
                            <p>Te ayudamos a automatizar TODO: conectar con tus 
                                sistemas, o hacer ajustes complicados y
                                hacer validaciones exclusivas de tu empresa, no sólo de la CNSF…
                            </p>
                            
                            <Link to="/automatizacion" className="read-more-btn">
                                Leer Más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon4} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/comunicacion">
                                    Comunicación entre áreas
                                </Link>
                            </h3>
                            <p>Te enviamos notificaciones cuando archivos de tu interés estén cargados; notificamos
                                al área correspondiente si encontramos errores en validaciones cruzadas.
                            </p>
                            
                            <Link to="/comunicacion" className="read-more-btn">
                                Leer Más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon5} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/cifras-de-control">
                                    Cifras de control y dashboard
                                </Link>
                            </h3>
                            <p>¿Desearías que las cifras de control de la CNSF se mostraran antes de enviar los archivos? 
                                Sin problema. Además: un dashboard con indicadores clave (!!)
                            </p>
                            
                            <Link to="/cifras-de-control" className="read-more-btn">
                                Leer Más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon6} alt="Service Icon" />
                            </div>
                            <h3>
                                <Link to="/permisos">
                                    Permisos por usuario
                                </Link>
                            </h3>
                            <p>El administrador puede dar permisos puntuales a cada usuario: para entrar a cada RR, para subir archivos, descargarlos, suscribirse…</p>
                            
                            <Link to="/permisos" className="read-more-btn">
                                Leer Más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOne