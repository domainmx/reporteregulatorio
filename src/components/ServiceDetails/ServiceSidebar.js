import React from 'react'
import {Link} from 'gatsby'

const ServiceSidebar = () => {
    return (
        <div className="services-details-info">
            <ul className="services-list">
                <li>
                    <Link to="/velocidad" activeClassName='active' partiallyActive={true}>
                        Velocidad de respuesta
                    </Link>
                </li>
                <li>
                    <Link to="/movilidad" activeClassName='active' partiallyActive={true}>
                        Movilidad
                    </Link>
                </li>
                <li>
                    <Link to="/automatizacion" activeClassName='active' partiallyActive={true}>
                        Automatización
                    </Link>
                </li>
                <li>
                    <Link to="/comunicacion" activeClassName='active' partiallyActive={true}>
                        Comunicación entre áreas
                    </Link>
                </li>
                <li>
                    <Link to="/cifras-de-control" activeClassName='active' partiallyActive={true}>
                        Cifras de control y dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/permisos" activeClassName='active' partiallyActive={true}>
                        Permisos por usuario
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default ServiceSidebar