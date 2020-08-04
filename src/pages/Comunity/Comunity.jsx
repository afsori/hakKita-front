import React from 'react';
import { Component,Fragment } from 'react';
import {
    Link
} from "react-router-dom";
import './Comunity.css';
import ContentBlog from '../../component/ContentBlog/ContentBlog';
import PopularPostBlog from '../../component/PopularPostBlog/PopularPostBlog';
import Footer from '../../component/Footer/Footer';

class Comunity extends Component{
    render(){
        return(
        <Fragment> 
            {/* <Router> */}
                <div className="header-wrapper wrap-blog">
                    <div className="container-header">
                        <div className="header-logo">
                        <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
                            
                        </div>
                        <div className="header-menu">
                            <ul>
                            <Link to={`/`}><li> Home</li></Link>
                                <li>About</li>
                                <li>Services</li>
                                <li>Pricing</li>
                                <Link to={`Blog`}><li> Blog</li></Link>
                                <li>Contact</li>
                                <li>
                                    <button>Masuk</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
                <div className="row-blog">
                    <div className="container-blog">
                        <h1>Blog</h1>
                    </div>
                </div>
                <div className="wrapper-content-blogger">
                    <ContentBlog/>
                    <PopularPostBlog/>
                </div>
                <Footer/>
            {/* </Router> */}
         </Fragment> 
        )
    }
}

export default Comunity;