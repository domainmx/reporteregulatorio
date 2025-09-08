import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

const TermsOfService = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Política de Cookies" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Política de Cookies" 
            />
            <section className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="terms-of-service-content" style={{marginTop: '60px'}}>
                                <p>
                                    En esta web se utilizan cookies de terceros y propias para conseguir que tengas una mejor experiencia de navegación, 
                                    puedas compartir contenido en redes sociales y para que podamos obtener estadísticas de los usuarios.
                                </p>
                                
                                <p>
                                    Puedes evitar la descarga de cookies a través de la configuración de tu navegador, evitando que las cookies se 
                                    almacenen en su dispositivo.
                                </p>
                                
                                <p>
                                    Como propietario de este sitio web, te comunico que no utilizamos ninguna información personal procedente de cookies, 
                                    tan sólo realizamos estadísticas generales de visitas que no suponen ninguna información personal.
                                </p>
                                
                                <p>
                                    Es muy importante que leas la presente política de cookies y comprendas que, si continúas navegando, consideraremos 
                                    que aceptas su uso.
                                </p>
                                
                                <p>
                                    Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información 
                                    y Comercio Electrónico, si continúas navegando, estarás prestando tu consentimiento para el empleo de los referidos 
                                    mecanismos.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>1.</span> Entidad Responsable</h3>
                                <p>
                                    La entidad responsable de la recogida, procesamiento y utilización de tus datos personales, en el sentido establecido 
                                    por la Ley de Protección de Datos Personales es la página www.domainmx.mx propiedad de Domain Differentech SA de CV.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>2.</span> ¿Qué son las cookies?</h3>
                                <p>
                                    Las cookies son un conjunto de datos que un servidor deposita en el navegador del usuario para recoger la información 
                                    de registro estándar de Internet y la información del comportamiento de los visitantes en un sitio web. Es decir, se 
                                    trata de pequeños archivos de texto que quedan almacenados en el disco duro del ordenador y que sirven para identificar 
                                    al usuario cuando se conecta nuevamente al sitio web. Su objetivo es registrar la visita del usuario y guardar cierta 
                                    información. Su uso es común y frecuente en la web ya que permite a las páginas funcionar de manera más eficiente y 
                                    conseguir una mayor personalización y análisis sobre el comportamiento del usuario.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>3.</span> ¿Qué tipos de cookies existen?</h3>
                                <p>
                                    Las cookies utilizadas en nuestro sitio web, son de sesión y de terceros, y nos permiten almacenar y acceder a 
                                    información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas por 
                                    el usuario, así como, seguir y analizar la actividad que lleva a cabo, con el objeto de introducir mejoras y prestar 
                                    nuestros servicios de una manera más eficiente y personalizada.
                                </p>
                                
                                <p>
                                    Las cookies, en función de su permanencia, pueden dividirse en cookies de sesión o permanentes. Las que expiran cuando 
                                    el usuario cierra el navegador. Las que expiran en función de cuando se cumpla el objetivo para el que sirven (por 
                                    ejemplo, para que el usuario se mantenga identificado en los servicios de Domain) o bien cuando se borran manualmente.
                                </p>
                                
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th><strong>Nombre</strong></th>
                                                <th><strong>Tipo</strong></th>
                                                <th><strong>Caducidad</strong></th>
                                                <th><strong>Finalidad</strong></th>
                                                <th><strong>Clase</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>_gid</td>
                                                <td>De Terceros (Google Analytics)</td>
                                                <td>24 horas</td>
                                                <td>Se usa para determinar nuevas sesiones o visitas</td>
                                                <td>No Exenta</td>
                                            </tr>
                                            <tr>
                                                <td>_ga</td>
                                                <td>De Terceros (Google Analytics)</td>
                                                <td>1 año</td>
                                                <td>Almacena el origen o la campaña que explica cómo el usuario ha llegado hasta la página web</td>
                                                <td>No Exenta</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <p>
                                    Adicionalmente, en función de su objetivo, las cookies pueden clasificarse de la siguiente forma:
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>4.</span> Cookies de rendimiento</h3>
                                <p>
                                    Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo que 
                                    no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta tipología se 
                                    incluyen: Ajustes de volumen de reproductores de vídeo o sonido. Las velocidades de transmisión de vídeo que sean 
                                    compatibles con su navegador. Los objetos guardados en el "carrito de la compra" en los servicios de e-commerce 
                                    tales como tiendas.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>5.</span> Cookies de geo-localización</h3>
                                <p>
                                    Estas cookies son utilizadas para averiguar en qué país se encuentra cuando se solicita un servicio. Esta cookie 
                                    es totalmente anónima, y sólo se utiliza para ayudar a orientar el contenido a su ubicación.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>6.</span> Cookies de analíticas</h3>
                                <p>
                                    Cada vez que un usuario visita un servicio, una herramienta de un proveedor externo genera una cookie analítica en 
                                    el ordenador del usuario. Esta cookie que sólo se genera en la visita, servirá en próximas visitas a los servicios 
                                    de Domain Differentech SA de CV para identificar de forma anónima al visitante. Los objetivos principales que se 
                                    persiguen son:
                                </p>
                                <ul>
                                    <li>Permitir la identificación anónima de los usuarios navegantes a través de la cookie (identifica navegadores y 
                                    dispositivos, no personas) y por lo tanto la contabilización aproximada del número de visitantes y su tendencia en 
                                    el tiempo.</li>
                                    <li>Identificar de forma anónima los contenidos más visitados y por lo tanto más atractivos para los usuarios</li>
                                    <li>Saber si el usuario que está accediendo es nuevo o repite visita.</li>
                                </ul>
                                
                                <p>
                                    <strong>Importante:</strong> Salvo que el usuario decida registrarse en un servicio de Domain Differentech SA de CV, 
                                    la cookie nunca irá asociada a ningún dato de carácter personal que pueda identificarle. Dichas cookies sólo serán 
                                    utilizadas con propósitos estadísticos que ayuden a la optimización de la experiencia de los usuarios en el sitio.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>7.</span> Cookies de publicidad</h3>
                                <p>
                                    Este tipo de cookies permiten ampliar la información de los anuncios mostrados a cada usuario anónimo en los servicios 
                                    de Domain Differentech SA de CV. Entre otros, se almacena la duración o frecuencia de visualización de posiciones 
                                    publicitarias, la interacción con las mismas, o los patrones de navegación y/o comportamientos del usuario ya que 
                                    ayudan a conformar un perfil de interés publicitario. De este modo, permiten ofrecer publicidad afín a los intereses 
                                    del usuario.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>8.</span> Cookies publicitarias de terceros</h3>
                                <p>
                                    Además de la publicidad gestionada por las webs de Domain Differentech SA de CV en sus servicios, las webs de Domain 
                                    Differentech SA de CV ofrecen a sus anunciantes la opción de servir anuncios a través de terceros ("Ad-Servers"). 
                                    De este modo, estos terceros pueden almacenar cookies enviadas desde los servicios de Domain Differentech SA de CV 
                                    procedentes de los navegadores de los usuarios, así como acceder a los datos que en ellas se guardan.
                                </p>
                                
                                <p>
                                    Las empresas que generan estas cookies tienen sus propias políticas de privacidad. En la actualidad, las webs de 
                                    Domain Differentech SA de CV utilizan la plataforma Doubleclick (Google) para gestionar estos servicios. Para más 
                                    información, acuda a
                                </p>
                                
                                <p>
                                    <a href="http://www.google.es/policies/privacy/ads/#toc-doubleclick" target="_blank" rel="noopener noreferrer">
                                        http://www.google.es/policies/privacy/ads/#toc-doubleclick
                                    </a> y a <a href="http://www.google.es/policies/privacy/ads/" target="_blank" rel="noopener noreferrer">
                                        http://www.google.es/policies/privacy/ads/
                                    </a>.
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>9.</span> ¿Cómo puedo deshabilitar las cookies en mi navegador?</h3>
                                <p>
                                    Se pueden configurar los diferentes navegadores para avisar al usuario de la recepción de cookies y, si se desea, 
                                    impedir su instalación en el equipo. Asimismo, el usuario puede revisar en su navegador qué cookies tiene instaladas 
                                    y cuál es el plazo de caducidad de las mismas, pudiendo eliminarlas.
                                </p>
                                
                                <p>Para ampliar esta información consulte las instrucciones y manuales de su navegador:</p>
                                
                                <ul>
                                    <li>Para más información sobre la administración de las cookies en Google Chrome: 
                                    <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer"> https://support.google.com/chrome/answer/95647?hl=es</a></li>
                                    
                                    <li>Para más información sobre la administración de las cookies en Internet Explorer: 
                                    <a href="http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions" target="_blank" rel="noopener noreferrer"> http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions</a></li>
                                    
                                    <li>Para más información sobre la administración de las cookies en Mozilla Firefox: 
                                    <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer"> http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</a></li>
                                    
                                    <li>Para más información sobre la administración de las cookies en Safari: 
                                    <a href="http://www.apple.com/es/privacy/use-of-cookies/" target="_blank" rel="noopener noreferrer"> http://www.apple.com/es/privacy/use-of-cookies/</a></li>
                                    
                                    <li>Para más información sobre la administración de las cookies en Opera: 
                                    <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" target="_blank" rel="noopener noreferrer"> http://help.opera.com/Windows/11.50/es-ES/cookies.html</a></li>
                                </ul>
                                
                                <p>
                                    Si desea dejar de ser seguido por Google Analytics visite: 
                                    <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"> http://tools.google.com/dlpage/gaoptout</a>
                                </p>
                                
                                <h3><span style={{color: '#ff6600'}}>10.</span> Para saber más sobre las cookies</h3>
                                <p>Puede obtener más información sobre la publicidad online basada en el comportamiento y la privacidad online en el siguiente enlace: 
                                <a href="http://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer"> http://www.youronlinechoices.com/es/</a></p>
                                
                                <p>Protección de datos de Google Analytics: 
                                <a href="http://www.google.com/analytics/learn/privacy.html" target="_blank" rel="noopener noreferrer"> http://www.google.com/analytics/learn/privacy.html</a></p>
                                
                                <p>Cómo usa Google Analytics las cookies: 
                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs" target="_blank" rel="noopener noreferrer"> https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs</a></p>
                                
                                <h3><span style={{color: '#ff6600'}}>11.</span> Actualizaciones y cambios en la política de privacidad/cookies</h3>
                                <p>
                                    Las webs de Domain Differentech SA de CV pueden modificar esta Política de Cookies en función de exigencias 
                                    legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la 
                                    Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
                                </p>
                                
                                <p>
                                    Cuando se produzcan cambios significativos en esta Política de Cookies, estos se comunicarán a los usuarios bien 
                                    mediante la web o a través de correo electrónico a los usuarios registrados.
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

export default TermsOfService;