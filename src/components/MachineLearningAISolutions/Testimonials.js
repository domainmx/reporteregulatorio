import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import client1 from '../../assets/images/testimonials/client1.jpg'
import client2 from '../../assets/images/testimonials/client2.jpg'
import client3 from '../../assets/images/testimonials/client3.jpg'
import shape from '../../assets/images/shape/shape1.svg'
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonials-area pt-100 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="testimonial" /> 
                        Testimonios
                    </span>
                    <h2>Qué opinan nuestros clientes</h2>
                    <p>No nos creas a nosotros…</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-testimonials-item">
                        <p>Para Sura ha sido una experiencia excelente trabajar con el sistema IntraVR: nos ayudaron con la automatización de la balanza de resultados y ahora generar 14 archivos del R7 es tan fácil como subir el archivo directamente desde el sistema contable, pulsar "Enviar" y listo.  </p>
                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client1} alt="testimonial" />
                                <div className="title">
                                    <h3>Sandro Valles</h3>
                                    <span>Sura</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>Para Liberty, Domain ha sido un proveedor clave puesto que no sólo nos ayudan a generar y validar los Reportes Regulatorios de la CNSF, también se han convertido en una parte básica del proceso de integración y conversión de reportes que se utilizan para realizar cálculos actuariales, generar reportes oficiales y comprobar la integridad de la información de nuestros sistemas internos.</p>
                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client2} alt="testimonial" />
                                <div className="title">
                                    <h3>Eduardo Martínez</h3>
                                    <span>Liberty Mutual</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel> : ''}

                <div className="testimonials-view-btn text-center">
                    <Link to="/testimonials" className="default-btn">
                        <i className="flaticon-view"></i> 
                        Ver todos los testimonios <span></span>
                    </Link>
                </div>
            </div>

            <div className="shape-img1">
                <img src={shape} alt="testimonial" />
            </div>
        </div>
    )
}

export default Testimonials;