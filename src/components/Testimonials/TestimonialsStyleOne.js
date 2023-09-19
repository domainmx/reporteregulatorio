import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import client1 from '../../assets/images/testimonials/client1.jpg'
import client2 from '../../assets/images/testimonials/client2.jpg'

const TestimonialsStyleOne = () => {
    return (
        <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        Testimonios
                    </span>
                    <h2>Qué opinan nuestros clientes</h2>
                    <p>No nos creas a nosotros…</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                            <p>Para Sura ha sido una experiencia excelente trabajar con el sistema IntraVR: 
                                nos ayudaron con la automatización de la balanza de resultados y ahora generar 
                                14 archivos del R7 es tan fácil como subir el archivo directamente desde el sistema
                                contable, pulsar "Enviar" y listo.
                            </p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={client1} alt="about" />
                                    <div className="title">
                                        <h3>Sandro Valles</h3>
                                        <span>Sura</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                            <p>Para Liberty, Domain ha sido un proveedor clave puesto que no sólo nos ayudan a generar y validar los Reportes Regulatorios de la CNSF, también se han convertido en una parte básica del proceso de integración y conversión de reportes que se utilizan para realizar cálculos actuariales, generar reportes oficiales y comprobar la integridad de la información de nuestros sistemas internos.</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={client2} alt="about" />
                                    <div className="title">
                                        <h3>Eduardo Martínez</h3>
                                        <span>Liberty Mutual</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsStyleOne