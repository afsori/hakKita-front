import React,{Component} from 'react';
import './PopularPostBlog.css';

class PopularPostBlog extends Component{
render(){
    return(
    <div className="wrapper-popular-post">
        <h3>Popular Post</h3>
        <div className="content-card-popular">
            <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
            <div className="caption-popular-post">
                <p className="judul-popular-post">Konser Semasa COVID 19, Boleh?</p>
                <p className="tgl-popular-post">June 15, 2020</p>
            </div>
        </div>
        <div className="content-card-popular">
            <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
            <div className="caption-popular-post">
                <p className="judul-popular-post">Konser Semasa COVID 19, Boleh?</p>
                <p className="tgl-popular-post">June 15, 2020</p>
            </div>
        </div>
        <div className="content-card-popular">
            <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
            <div className="caption-popular-post">
                <p className="judul-popular-post">Konser Semasa COVID 19, Boleh?</p>
                <p className="tgl-popular-post">June 15, 2020</p>
            </div>
        </div>
        <div className="content-card-popular">
            <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
            <div className="caption-popular-post">
                <p className="judul-popular-post">Konser Semasa COVID 19, Boleh?</p>
                <p className="tgl-popular-post">June 15, 2020</p>
            </div>
        </div>
    </div>
    )
}
}

export default PopularPostBlog;