import React from 'react';
import {Link} from 'gatsby'

import ProjectStart1 from '../../assets/images/project-start1.png'
import CircleShape1 from '../../assets/images/shape/circle-shape1.png'

const ProjectStartArea = () => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src={ProjectStart1} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>¿Qué te ha parecido todo hasta ahora?</h2>
                            <p>Ninguna decisión relevante se toma a la ligera. Te invitamos a escribirnos para que platiquemos sobre tus necesidades, tus ideas, tus tiempos.</p>
                            
                            <Link to="/contact" className="default-btn">
                                <i className="flaticon-web"></i> 
                                Empecemos
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={CircleShape1} alt="image" />
            </div>
        </div>
    )
}

export default ProjectStartArea;