import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import HowItWork from '../components/MachineLearningAISolutions/HowItWork'
 
const AboutUs = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Acerca de" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Acerca de" 
            />
            <AboutUsContent />
            <HowItWork />
            <Footer />
        </Layout>
    );
}

export default AboutUs;