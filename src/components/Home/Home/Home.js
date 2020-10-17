import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Media from '../Media/Media';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Media></Media>
            <Services></Services>
            <Projects></Projects>
            <ClientsFeedback></ClientsFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;