import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';

export default ({children, categories}) => {


    return (
        <div className="user-page">
            <Header cateData={categories}/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}
