import React from 'react';
import LogoPart from '../../components/LogoPart/LogoPart';
import Navbar from '../../components/Navbar/Navbar'
import './homepage.scss'
import ContentPart from '../../components/ContentPart/ContentPart';

function HomePage(props) {


    return (
        <div className="main">
            <div className="wrapper">
                <LogoPart />
                <Navbar />
                <ContentPart />
            </div>
        </div>
    );
}

export default HomePage;