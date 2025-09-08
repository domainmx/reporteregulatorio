import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import { Link } from 'gatsby'

const PrivacyPolicy = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Aviso de Privacidad" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Aviso de Privacidad" 
            />
            <section className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="privacy-policy-content" style={{marginTop: '60px'}}>
                                <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '30px'}}>AVISO DE PRIVACIDAD</h3>
                                
                                <p>
                                    DOMAIN DIFFERENTECH SA DE CV, mejor conocido como DOMAIN), con domicilio en calle Prolongación 
                                    Vasco de Quiroga #3735, colonia El Yaqui, ciudad CDMX, municipio o delegación Cuajimalpa, c.p. 05320, en la 
                                    entidad de CDMX, país México, y portal de internet domainmx.mx, es el responsable del uso y protección de sus 
                                    datos personales, y al respecto le informamos lo siguiente:
                                </p>

                                <h3><span style={{color: '#ff6600'}}>1.</span> ¿Para qué fines utilizaremos sus datos personales?</h3>
                                
                                <div style={{backgroundColor: '#ffe8d6', padding: '20px', marginBottom: '20px', borderRadius: '5px'}}>
                                    <p style={{fontStyle: 'italic', color: '#000000'}}>
                                        Utilizaremos su información personal para las siguientes finalidades secundarias que no son 
                                        necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
                                    </p>
                                </div>

                                <ul>
                                    <li>para tener contacto con el personal del cliente relacionado con el proyecto</li>
                                </ul>

                                <p>
                                    En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a 
                                    continuación:
                                </p>

                                <p>No consiento que mis datos personales se utilicen para los siguientes fines:</p>

                                <p>[ ] para tener contacto con el personal del cliente relacionado con el proyecto</p>

                                <p>
                                    La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le 
                                    neguemos los servicios y productos que solicita o contrata con nosotros.
                                </p>

                                <h3><span style={{color: '#ff6600'}}>2.</span> ¿Qué datos personales utilizaremos para estos fines?</h3>

                                <p>
                                    Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos 
                                    personales:
                                </p>

                                <ul>
                                    <li>Nombre</li>
                                    <li>Teléfono celular</li>
                                    <li>Puesto o cargo que desempeña</li>
                                    <li>Correo electrónico institucional</li>
                                    <li>Teléfono institucional</li>
                                    <li>Datos de identificación</li>
                                    <li>Datos de contacto</li>
                                </ul>

                                <h3><span style={{color: '#ff6600'}}>3.</span> ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</h3>

                                <p>
                                    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del 
                                    uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de 
                                    que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o 
                                    bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como 
                                    oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como 
                                    derechos ARCO.
                                </p>

                                <p>
                                    Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del 
                                    siguiente medio:
                                </p>

                                <p>
                                    Enviando un correo electrónico a: <a href="mailto:contacto@domainmx.mx">contacto@domainmx.mx</a>
                                </p>

                                <p>
                                    Con relación al procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:
                                </p>

                                <ul>
                                    <li>¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, 
                                    así como la personalidad de este último?<br/>
                                    Identificación oficial</li>
                                    
                                    <li>¿Qué información y/o documentación deberá contener la solicitud?<br/>
                                    Nombre completo, correo electrónico, teléfono de contacto y descripción de la solicitud</li>
                                    
                                    <li>¿En cuántos días le daremos respuesta a su solicitud?<br/>
                                    20 días hábiles</li>
                                    
                                    <li>¿Por qué medio le comunicaremos la respuesta a su solicitud?<br/>
                                    Correo electrónico</li>
                                </ul>

                                <h3><span style={{color: '#ff6600'}}>4.</span> ¿Cómo puede limitar el uso o divulgación de su información personal?</h3>

                                <p>
                                    Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los 
                                    siguientes medios:
                                </p>

                                <ul>
                                    <li>Enviando un correo electrónico a: contacto@domainmx.mx</li>
                                </ul>

                                <h3><span style={{color: '#ff6600'}}>5.</span> ¿Cómo puede conocer los cambios en este aviso de privacidad?</h3>

                                <p>
                                    El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos 
                                    requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de 
                                    nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
                                </p>

                                <p>
                                    Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, 
                                    a través de: Correo electrónico.
                                </p>

                                <p>
                                    El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al 
                                    presente aviso de privacidad es el siguiente:
                                </p>

                                <p>
                                    Se enviará un correo electrónico a los contactos registrados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    )
}

export default PrivacyPolicy;