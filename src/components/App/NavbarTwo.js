import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"

const NavbarTwo = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="tarn-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/"
                                onClick={() => setCollapsed(true)} 
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                                <Link 
                                                    to="/" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                            Home 
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Acerca de <i className='bx bx-chevron-down'></i>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/about-us" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                   Acerca de
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/testimonials" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Testimonios
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                                    partiallyActive={true}
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Ventajas <i className='bx bx-chevron-down'></i>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/velocidad" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Velocidad de respuesta
                                                </Link>
                                                <Link to="/movilidad" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Movilidad
                                                </Link>
                                                <Link to="/automatizacion" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Automatización
                                                </Link>
                                                <Link to="/comunicacion" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Comunicación entre áreas
                                                </Link>
                                                <Link to="/cifras-de-control" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Cifras de control e indicadores
                                                </Link>
                                                <Link to="/permisos" 
                                                    activeClassName="active"
                                                    partiallyActive={true}
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Permisos por usuario
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/faq" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Preguntas frecuentes
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link 
                                            to="/gallery" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Galería
                                        </Link>
                                    </li>
                                </ul>
                            
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <Link 
                                            to="/contact" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="default-btn"
                                        >
                                            <i className="flaticon-right"></i> Contáctanos <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavbarTwo
