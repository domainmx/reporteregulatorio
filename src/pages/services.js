import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServicesOne from '../components/Services/ServicesOne'
import StartProject from '../components/Common/StartProject'

const Services = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />
            <ServicesOne />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Services