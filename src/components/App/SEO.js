import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Reporte Regulatorio - Para todas las necesidades de cumplimiento y automatización de los RRs con la CNSF</title>
                <meta name="description" content="Suite IntraVR360 - Cumplimiento regulatorio CNSF + automatización y validación" />
                <meta name="og:title" property="og:title" content="Suite IntraVR360 - Cumplimiento regulatorio CNSF + automatización y validación"></meta>
                <meta name="twitter:card" content="Suite IntraVR360 - Cumplimiento regulatorio CNSF + automatización y validación"></meta>
                <link rel="canonical" href="https://reporteregulatorio.mx/"></link>
                <meta property="og:image" content="https://reporteregulatorio.mx/static/logo-dd4d191036840e7cdde30cac4367d8a0.png" />
            </Helmet>
        </div>
    )
}

export default SEO
