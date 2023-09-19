import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import TestimonialsStyleOne from '../components/Testimonials/TestimonialsStyleOne'

const Testimonials = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Testimonios" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Testimonios" 
            />
            <TestimonialsStyleOne />
            <Footer />
        </Layout>
    );
}

export default Testimonials