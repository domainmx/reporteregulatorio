import React from 'react';
import {Link} from 'gatsby'
import Loadable from '@loadable/component'
const ModalVideo = Loadable(() => import('react-modal-video'))
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ]
};

const MainBanner = () => {
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    // Owl Carousel
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            {display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="main-banner-item item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-item-content">
                                    <span className="sub-title">IntraVR</span>
                                    <h1>Soluciona los Reportes Regulatorios</h1>
                                    <p>La suite IntraVR360 integra, administra, valida y automatiza la generación y envío de Reportes Regulatorios a la CNSF</p>

                                    <div className="btn-box">
                                        <Link to="/about-us" className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            Acerca de<span></span>
                                        </Link>

                                        <Link 
                                            to="#play-video" 
                                            onClick={e => {e.preventDefault(); openModal()}} 
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="flaticon-google-play"></i> Ver video
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner-item item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-item-content">
                                    <span className="sub-title">IntraVR</span>
                                    <h1>Amplia experiencia en el sector</h1>
                                    <p>Con 19 años en el sector financiero y asegurador, nuestra experiencia
                                        incluye sistemas para bancos, aseguradoras, afianzadoras y varios
                                        tipos más de instituciones financieras
                                    </p>
                                    
                                    <div className="btn-box">
                                        <Link to="/about-us" className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            Acerca de<span></span>
                                        </Link>

                                        <Link 
                                            to="#play-video" 
                                            onClick={e => {e.preventDefault(); openModal()}} 
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="flaticon-google-play"></i> Ver video
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </React.Fragment>
    )
}

export default MainBanner;