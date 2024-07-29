import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigation';


function Home() {

    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Home;