import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import {Link} from 'gatsby'
import gallery1 from '../assets/images/gallery/gallery1.png'
import gallery2 from '../assets/images/gallery/gallery2.png'
import gallery3 from '../assets/images/gallery/gallery3.png'
import gallery4 from '../assets/images/gallery/gallery4.png'
import gallery5 from '../assets/images/gallery/gallery5.png'
import gallery6 from '../assets/images/gallery/gallery6.png'
import gallery7 from '../assets/images/gallery/gallery7.png'
import gallery8 from '../assets/images/gallery/gallery8.png'
import gallery9 from '../assets/images/gallery/gallery9.png'
import gallery10 from '../assets/images/gallery/gallery10.png'
import gallery11 from '../assets/images/gallery/gallery11.png'
import gallery12 from '../assets/images/gallery/gallery12.png'
import gallery13 from '../assets/images/gallery/gallery13.png'
import gallery14 from '../assets/images/gallery/gallery14.png'
import gallery15 from '../assets/images/gallery/gallery15.png'
import gallery16 from '../assets/images/gallery/gallery16.png'
import gallery17 from '../assets/images/gallery/gallery17.png'
import gallery18 from '../assets/images/gallery/gallery18.png'
import gallery19 from '../assets/images/gallery/gallery19.png'
import gallery20 from '../assets/images/gallery/gallery20.png'
import Lightbox from 'react-image-lightbox'

const images = [
    (gallery1),
    (gallery2),
    (gallery3),
    (gallery4),
    (gallery5),
    (gallery6),
    (gallery7),
    (gallery8),
    (gallery9),
    (gallery10),
    (gallery11),
    (gallery12),
    (gallery13),
    (gallery14),
    (gallery15),
    (gallery16),
    (gallery17),
    (gallery18),
    (gallery19),
    (gallery20),
];

const Gallery = () => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Galería" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Galería" 
            />

            <div className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(0);}
                                    }
                                >
                                    <img src={gallery1} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(1);}
                                    }
                                >
                                    <img src={gallery2} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(2);}
                                    }
                                >
                                    <img src={gallery3} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(3);}
                                    }
                                >
                                    <img src={gallery4} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(4);}
                                    }
                                >
                                    <img src={gallery5} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(5);}
                                    }
                                >
                                    <img src={gallery6} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(6);}
                                    }
                                >
                                    <img src={gallery7} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(7);}
                                    }
                                >
                                    <img src={gallery8} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(8);}
                                    }
                                >
                                    <img src={gallery9} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(6);}
                                    }
                                >
                                    <img src={gallery7} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(7);}
                                    }
                                >
                                    <img src={gallery8} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(8);}
                                    }
                                >
                                    <img src={gallery9} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(9);}
                                    }
                                >
                                    <img src={gallery10} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(10);}
                                    }
                                >
                                    <img src={gallery11} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(11);}
                                    }
                                >
                                    <img src={gallery12} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(12);}
                                    }
                                >
                                    <img src={gallery13} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(13);}
                                    }
                                >
                                    <img src={gallery14} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(14);}
                                    }
                                >
                                    <img src={gallery15} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(15);}
                                    }
                                >
                                    <img src={gallery16} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(16);}
                                    }
                                >
                                    <img src={gallery17} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(17);}
                                    }
                                >
                                    <img src={gallery18} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(18);}
                                    }
                                >
                                    <img src={gallery19} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link 
                                    to="#"
                                    onClick={e => {
                                        e.preventDefault(); 
                                        setIsOpenImage(true); 
                                        setPhotoIndex(19);}
                                    }
                                >
                                    <img src={gallery20} alt="event" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
            
            <Footer />
        </Layout>
    );
}

export default Gallery