import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import OurHistoryContentOne from '../components/History/OurHistoryContentOne'

const History = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Automatización" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Automatización" 
            />
            <OurHistoryContentOne />
            <Footer />
        </Layout>
    );
}

export default History