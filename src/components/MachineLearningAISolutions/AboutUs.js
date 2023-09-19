import React from 'react';
import {Link} from 'gatsby'

import AboutImg from '../../assets/images/about/about-img9.png'
import StarIcon from '../../assets/images/star-icon.png'
import Icon4 from '../../assets/images/icons/icon4.png'
import Icon5 from '../../assets/images/icons/icon5.png'
import CircleShape1 from '../../assets/images/shape/circle-shape1.png'

import Loadable from '@loadable/component'
const ModalVideo = Loadable(() => import('react-modal-video'))

const AboutUs = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image-box">
                                <img src={AboutImg} alt="AboutImg" />
                                
                                <div className="box">
                                    <Link 
                                        to="#play-video" 
                                        onClick={e => {e.preventDefault(); openModal()}} 
                                        className="video-btn popup-youtube"
                                    >
                                        <i className="flaticon-google-play"></i> Ver el video
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={StarIcon} alt="StarIcon" /> 
                                        El producto
                                    </span>
                                    <h2>Nuestros clientes usan el sistema desde 2017</h2>
                                    <p>Más de cinco años utilizando nuestro sistema mes tras mes, 
                                        generando archivos automáticamente, haciendo todas las validaciones
                                        que pide la Comisión, con 100% de aceptación en el SEIVE
                                    </p>
                                    
                                    <ul className="features-list">
                                        <li>
                                            <img src={Icon4} alt="Icon4" />
                                            <h3>6 años</h3>
                                            <p>En el mercado</p>
                                        </li>
                                        <li>
                                            <img src={Icon5} alt="Icon5" />
                                            <h3>100%</h3>
                                            <p>Aceptación en el SEIVE</p>
                                        </li>
                                    </ul>
                                    <p>Con gusto te podemos contactar con nuestros clientes existentes para que te
                                        cuenten de primera mano cómo es la experiencia de usar nuestro sistema.<br/>
                                        ¡O quizá ya hablaste con ellos!
                                    </p>

                                    <Link to="/about-us" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Conocer más <span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-shape1">
                    <img src={CircleShape1} alt="CircleShape" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutUs;