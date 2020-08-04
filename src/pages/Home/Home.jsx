import React, { Component} from 'react';
import Banner from '../../component/Banner/Banner';
import Header from '../../component/Header/Header';
import CardWhyWe from '../../component/CardWhyWe/CardWhyWe';
import Product from '../../component/Product/Product';
import Blog from '../../component/Blog/Blog';
import Footer from '../../component/Footer/Footer';

class Home extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Banner/>
            <CardWhyWe/>
            <Product/>
            <Blog/>
            <Footer/>
            </div>
        )
    }
}

export default Home;