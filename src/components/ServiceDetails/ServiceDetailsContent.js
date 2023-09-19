import React from 'react'
import {Link} from 'gatsby'
import ServiceSidebar from './ServiceSidebar'
import imgautomatizacion from '../../assets/images/services/automatizacion.png'
import imgvelocidad from '../../assets/images/services/velocidad.png'
import imgmovilidad from '../../assets/images/services/movilidad.png'
import imgpermisos from '../../assets/images/services/permisos.png'
import imgcifras from '../../assets/images/services/cifras.png'
import imgcomunicacion from '../../assets/images/services/comunicacion.png'
import project2 from '../../assets/images/projects/project2.jpg'

const ServiceDetailsContent = (props) => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <Contenido desde={props.desde} />
                    <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Contenido(props) {
    const desde = props.desde;
    switch (desde) {
        case "automatizacion":
            return <div className="col-lg-8 col-md-12">
                <div className="services-details-image">
                    <img src={imgautomatizacion} alt="about" />
                </div>

                <div className="services-details-desc">
                    <span className="sub-title">Integración con otros sistemas</span>
                    <h3>Automatización</h3>
                    <p>El total de archivos que solicita la CUSF es de más de 300… estamos entonces
                        de acuerdo en que es casi imposible generar cada uno manualmante, ¿cierto?
                        <br/>
                        La solución es la <b>automatización</b> de los Reportes Regulatorios. Sigue leyendo 
                        para conocer más sobre nuestra postura.
                    </p>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="image">
                                <img src={project2} alt="about" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="content">
                                <h3>Tipos de automatización</h3>
                                <ul>
                                    <li>Generar varios archivos a partir de uno</li>
                                    <li>Convertir la salida de un sistema contable / financiero / etc</li>
                                    <li>Conectar nuestro sistema con un sistema de la empresa</li>
                                    <li>Enviar resultados automáticamente hacia sistemas de la empresa</li>
                                    <li>Completar información a partir de fórmulas y criterios</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        case "comunicacion" :
            return <div className="col-lg-8 col-md-12">
                <div className="services-details-image">
                    <img src={imgcomunicacion} alt="about" />
                </div>

                <div className="services-details-desc">
                    <span className="sub-title">El día a día</span>
                    <h3>Comunicación entre áreas</h3>
                    <p>No más correos con la última-ultima-ultimaversion.txt de los
                        archivos: cuando las diferentes áreas necesiten intercambiar 
                        información, pueden hacerlo vía el sistema:
                        <br/>
                        Por ejemplo, el área que procesa el R4 necesita el archivo
                        INVE que se sube por otra área, al Reporte R7. Simplemente se
                        "suscriben" (vía el sistema) al archivo INVE y en cuanto se
                        haga cualquier movimiento con él -es decir, cuando se suba 
                        la primera, segunda, tercera versión del archivo- les llegará
                        un correo.
                        <br/>
                        Con esto, el mencionado usuario puede dirigirse al módulo R7,
                        para el cual el administrador le habrá dado permisos de sólo lectura,
                        y podrá descargar desde ahí el archivo. De este modo, Siempre
                        utilizará la última y correcta versión del archivo.
                    </p>

                </div>
            </div>
        case "permisos" :
            return <div className="col-lg-8 col-md-12">
                <div className="services-details-image">
                    <img src={imgpermisos} alt="about" />
                </div>

                <div className="services-details-desc">
                    <span className="sub-title">Seguridad y roles</span>
                    <h3>Permisos por usuario</h3>
                    <p>El administrador determina qué permisos tiene cada uno de los
                        usuarios del sistema. Esto significa que puede crear usuarios
                        con permisos para suscribirse a ciertos archivos, a descargar
                        otros, a subir sólo los archivos que le corresponden dependiendo
                        del área al que pertenezca, etc.
                        <br/>
                        De esta manera, puedes estar seguro de que nadie subirá archivos
                        por error, sin que le corresponda, e incluso que sólo ciertos usuarios
                        tendrán acceso a reportes clave de la compañía.
                        <br/>
                        Pero ¿qué ocurre si un usuario inadvertidamente sube un archivo
                        incorrecto y sobreescribe un archivo anterior, que ya estaba validado?
                        Para empezar, nuestro sistema no permite que ocurra ese caso en 
                        particular, pero además cuenta con una bitácora de acceso y de
                        acciones, para saber en cada momento qué se ejecutó en el sistema.
                        Ya sabes, "trust, but verify"
                    </p>

                </div>
            </div>
        case "cifras-de-control" :
            return <div className="col-lg-8 col-md-12">
                <div className="services-details-image">
                    <img src={imgcifras} alt="about" />
                </div>

                <div className="services-details-desc">
                    <span className="sub-title">Análisis</span>
                    <h3>Cifras de control</h3>
                    <p>Desarrollamos en el sistema un reporte especial, llamado
                        Cifras de Control. Es una versión mejorada del reporte que 
                        el SEIVE arroja al terminar de subir el R7. 
                        <br/>
                        La diferencia principal es que el nuestro puedes ejecutarlo
                        conforme vas subiendo archivos: quizá primero subes el INVE, 
                        luego el CRED, luego el CMBG, el CMER, el FOPA… en cada momento
                        puedes revisar el reporte de Cifras de Control y tomar decisiones
                        que pueden ahorrarle mucho, pero mucho dinero a la compañía.
                        <br/>
                        Para ver el reporte, puedes ir a la sección de <Link to="/gallery" 
                                                    activeClassName="active"
                                                    className="nav-link" > Galería.</Link>
                    </p>

                </div>
            </div>
        case "velocidad" :
            return <div className="col-lg-8 col-md-12">
                <div className="services-details-image">
                    <img src={imgvelocidad} alt="about" />
                </div>

                <div className="services-details-desc">
                    <span className="sub-title">Tiempo de reacción</span>
                    <h3>Velocidad de respuesta</h3>
                    <p>El sistema es rápido, por supuesto. Las computadoras suelen hacer
                        las cosas con gran velocidad. Sin embargo no nos referimos a ese tipo de
                        velocidad: el punto es que si el área de contabilidad puede corregir
                        o modificar los archivos (¡siempre hay cambios de último momento!) y 
                        volver a procesar sin que esto signifique pasar la noche en vela, 
                        vas a tener un área contable muy feliz.
                        <br/>
                        Y no sólo eso: si quieres hacer pruebas haciendo pequeñas modificaciones
                        en los valores de límites, garantías, reservas, etc, puedes estar 
                        tranquilo sabiendo que cada cambio significará cinco, diez minutos en
                        el tiempo total.
                        <br/>
                        ¿Qué dices? ¿Que tardan semanas en generar los archivos para el R8? 
                        Lo entendemos. Con nuestro sistema, y haciendo una integración con tus 
                        sistemas / archivos fuente, tardarás sólo horas. Sí, horas.
                        
                    </p>

                </div>
            </div>
        case "movilidad" :
            return <div className="col-lg-8 col-md-12">
                <div className="services-details-image">
                    <img src={imgmovilidad} alt="about" />
                </div>

                <div className="services-details-desc">
                    <span className="sub-title">Siempre en control</span>
                    <h3>Movilidad</h3>
                    <p>Como el sistema corre en cualquier computadora que tenga un navegador
                        (Edge, Internet Explorer, Firefox, Chrome, Safari), no es necesario
                        instalar ningún software especial en las máquinas de tus usuarios,
                        ni aprobar el uso de una computadora en especial. ¡Ni siquiera 
                        estar en la oficina! 
                        <br/>
                        Puedes acceder al sistema desde una computadora conectada a internet.
                        Sólo tienes que introducir usuario y contraseña, y listo. Esto, por
                        supuesto, con todas las medidas de seguridad (descritas más abajo).
                        <br/>
                        <br/>
                        Tenemos una aplicación móvil (disponible en Apple App Store y Google 
                        Play Store) que cualquiera de tus usuarios pueden descargar absolutamente
                        sin costo.
                        <br/>
                        Desde la aplicación podrán revisar el estatus de los Reportes
                        (en los que tengan permisos) e incluso ver el contenido de los 
                        archivos. 
                    </p>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="image">
                                <img src={project2} alt="about" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="content">
                                <h3>Medidas de seguridad</h3>
                                <ul>
                                    <li>Conexión encriptada</li>
                                    <li>Rotación de contraseñas</li>
                                    <li>Autenticación de dos factores</li>
                                    <li>Servidor en la nube encriptado y "blindado"</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    }
    return <div>hola</div>
  }

export default ServiceDetailsContent