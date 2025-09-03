import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
const Contact = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Contacto" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contacto" 
            />
            <ContactInfo />
            <ContactForm />
            <Footer />
        </Layout>
    );
}

export default Contact