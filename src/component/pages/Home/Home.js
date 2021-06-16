import React from 'react';
import Header from './Header.js'
import Title from './Title.js'
import ClubsGrid from "./ClubsGrid";
import Footer from './Footer'
import s from './Home.module.css'

const Home = () => {
    return (
        <div className="container">
            <header>
                <Header/>
            </header>
            <main>
                <Title/>
                <ClubsGrid/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Home;