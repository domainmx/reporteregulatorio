import React from 'react';
import NavbarTwo from "../components/App/NavbarTwo"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

import MainBanner from '../components/MachineLearningAISolutions/MainBanner';
import AboutUs from '../components/MachineLearningAISolutions/AboutUs';
import Services from '../components/MachineLearningAISolutions/Services';
import HowItWork from '../components/MachineLearningAISolutions/HowItWork';
import Testimonials from '../components/MachineLearningAISolutions/Testimonials';
import ProjectStartArea from '../components/MachineLearningAISolutions/ProjectStartArea';


const Home = () => {
    return (
        <Layout>
            <NavbarTwo />
            <MainBanner />
            <AboutUs />
            <HowItWork />
            <Services />
            <Testimonials /> 
            <ProjectStartArea /> 
            <Footer />
        </Layout>
    );
}


export default Home