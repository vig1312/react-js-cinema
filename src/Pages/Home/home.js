import React from 'react';
import Navigation from "../../Components/HomeLayout/navigation";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/HomeLayout/footer";

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