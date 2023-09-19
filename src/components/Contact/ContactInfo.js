import React from 'react'

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Dónde estamos</h3>
                            <p>Prolongación Vasco de Quiroga #3735, CDMX, CP 05310</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contacto</h3>
                            <p>Mobile: <a href="tel:+525552523629">(+55) - 555252 - 3629</a></p>
                            <p>E-mail: <a href="mailto:contacto@domainmx.mx">contacto@domainmx.mx</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Horas de operación</h3>
                            <p>Lunes - Viernes: 09:00 - 20:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo