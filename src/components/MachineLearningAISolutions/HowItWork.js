import React from 'react';

import StarIcon from '../../assets/images/star-icon.png'
import HowItsWork from '../../assets/images/how-it-works2.png'

const HowItWork = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={StarIcon} alt="image" /> 
                                Cómo funciona
                            </span>
                            <h2>El proceso</h2>
                            <p>Generar y validar los reportes regulatorios es realmente fácil:</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Sube un archivo de Excel</h3>
                                    <p>El archivo puede ser el de la balanza, el reporte de tu sistema, o un archivo preparado manualmente por tu equipo</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>Pulsa el botón "Cargar"</h3>
                                    <p>En algún caso, ¡quizá ni siquiera hace falta pulsar el botón! (cuando hayamos integrado nuestro sistema con alguno de los tuyos)</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>Revisa los resultados</h3>
                                    <p>¿Quizá tu archivo no estaba 100% correcto? A veces hay errores entre distintos Reportes Regulatorios, y esos -por supuesto- también los detectamos!</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        4
                                    </div>
                                    <h3>Carga archivos adicionales</h3>
                                    <p>Puedes hacer cargas manuales de archivos individuales o cargar los provenientes de otros RRs. <br/>El sistema los validará inmediatamente, asegurándose de que cumplan con todos los archivos existentes</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        5
                                    </div>
                                    <h3>Genera el archivo .zip</h3>
                                    <p>Genera un archivo .zip con todos los archivos de tu RR. Sólo hace falta firmarlo y enviarlo al SEIVE!</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        6
                                    </div>
                                    <h3>Carga otros RRs</h3>
                                    <p>Tú, o alguien de otro departamento, pueden subir archivos para otros Reportes Regulatorios. Todo se valida en tiempo real, y si se detectan problemas, el sistema te avisa de inmediato.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src={HowItsWork} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork;