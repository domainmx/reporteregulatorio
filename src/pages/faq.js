import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'

const FAQ = () => {
    return (
        <Layout>
            <NavbarTwo />

            <PageBanner
                pageTitle="FAQ" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="FAQ" 
            />

            <div className="ptb-100">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span style={{color: '#ff6600'}}>Q1.</span> ¿Qué módulos de los Reportes Regulatorios ofrecen?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Todos los definidos en la CUSF de la CNSF: R1, R2, R3, R4, R5, R6, R7, R8, R9
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span style={{color: '#ff6600'}}>Q2.</span> Si contrato hoy, ¿qué funciones tendría habilitadas?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Las siguientes:
                                        <ul>
                                            <li>Validación de archivos de los módulos contratados</li>
                                            <li>Validación entre módulos contratados</li>
                                            <li>Reporte de Cifras de control</li>
                                            <li>Dashboard</li>
                                            <li>App móvil</li>
                                        </ul>
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span style={{color: '#ff6600'}}>Q3.</span> ¿Qué necesito hacer si quiero automatizar los Reportes Regulatorios?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Nuestra recomendación es lo que llamamos una "integración": conectar nuestro 
                                        sistema con tu sistema contable/analítico/operativo
                                        <br/>
                                        Ahora bien, seguro tus sistemas tienen sus propios catálogos, tipos de valores, 
                                        etc. Lo que se necesita entonces es agregar a esa conexión una serie de 
                                        fórmulas y transformaciones -generalmente muy simples- para que se "traduzcan" esos
                                        valores en los que la CNSF requiere.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span style={{color: '#ff6600'}}>Q4.</span> ¿Cuánto tiempo toma hacer la automatización?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Depende de la cantidad de sistemas y archivos que quieras "integrar". En general,
                                        los sistemas generan reportes que nos pueden servir mucho para hacer esta traducción
                                        de la que hablábamos. 
                                        <br/>
                                        De manera muy general, una integración toma entre dos y cuatro semanas. 
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span style={{color: '#ff6600'}}>Q5.</span> ¿Se puede utilizar la balanza de resultados para generar archivos del R7?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Qué bueno que lo preguntas. En efecto, se puede usar la balanza. Ya tenemos
                                        un módulo que hace esto, lo único necesario es configurar el "mapeo" entre 
                                        tus cuentas contables y las de la CNSF.
                                        <br/>
                                        Los archivos que se generan son:
                                        <ul>
                                            <li>CMBG</li>
                                            <li>CMER</li>
                                            <li>IRRE</li>
                                            <li>OACT</li>
                                            <li>ACRE</li>
                                            <li>OPAS</li>
                                            <li>CSOC</li>
                                            <li>CORD</li>
                                            <li>PRIM</li>
                                            <li>CADQ</li>
                                            <li>CSIN</li>
                                            <li>COPE</li>
                                            <li>RIFI</li>
                                            <li>BASE</li>
                                        </ul>
                                        También generamos el FOPA, una vez que alimentas el CCMP e introduces el 
                                        valor del RCS del periodo correspondiente.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span style={{color: '#ff6600'}}>Q6.</span> ¿Cómo funciona el contrato por el servicio?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        El sistema opera en una modalidad de renta; cada módulo puede rentarse
                                        por separado y por la duración que se desee. 
                                        <br/>
                                        Para ser prácticos, se firma un contrato anual -sin embargo ahí se puede
                                        estipular la duración de cada módulo- y se hace el pago por adelantado. Una vez
                                        firmado, se puede operar el sistema al día siguiente (!)
                                        <br/>
                                        Sin embargo, para obtener el máximo provecho al sistema, se recomienda realizar
                                        un mínimo de integraciones:
                                        <ul>
                                            <li>Cuentas contables en balanza de resultados (Sólo R7)</li>
                                            <li>Archivos fuente de datos generales, emisión y siniestro (Sólo R8)</li>
                                            <li>Archivos fuente para R3, R4 y R6</li>
                                        </ul>
                                        Estas integraciones son las que aprovechan las ventajas del sistema y permiten
                                        reducir la carga de trabajo hasta en un 90%!
                                        <br/>
                                        Habrás notado que no hablamos de número de usuarios, al hablar de costos. Esto
                                        es porque no hay límite en la cantidad de usuarios; esto permite que se 
                                        involucren con el sistema todas las personas que interactúen con los Reportes 
                                        Regulatorios…
                                        <br/>
                                        Y una cosa más: si un mismo grupo de personas opera sobre varias empresas, 
                                        el sistema puede manejarlo sin problema. El costo de cada  empresa adicional
                                        es del 50% del precio regular.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>

            <StartProject />
            
            <Footer />
        </Layout>
    );
}

export default FAQ