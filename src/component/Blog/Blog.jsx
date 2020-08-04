import React from 'react';
import {
    Link
} from "react-router-dom";
import './Blog.css';

const Blog = () =>{
    return(
        <div className="wrapper-card-blog">
            <div className="card-blog-wrap">
                <h1>Love Reading, Keep Reading</h1>
                <p className="caption-judul-blog">Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
                <div className="flex-card-blog">
                    <div className="card-blog">
                        <button className="btn-blog">BLOG</button>
                        <p className="judul-blog">Konser Semasa COVID 19, Boleh?</p>
                        <p className="tanggal-blog">6/15/2020, 8:34:06 PM</p>
                        <Link to={`Blog`}>
                            <button className="btn-read-more">Read More</button>
                        </Link>
                    </div>
                    <div className="card-blog">
                        <button className="btn-blog">BLOG</button>
                        <p className="judul-blog">Konser Semasa COVID 19, Boleh?</p>
                        <p className="tanggal-blog">6/15/2020, 8:34:06 PM</p>
                        <Link to={`Blog`}>
                            <button className="btn-read-more">Read More</button>
                        </Link>
                    </div>
                    <div className="card-blog">
                        <button className="btn-blog">BLOG</button>
                        <p className="judul-blog">Konser Semasa COVID 19, Boleh?</p>
                        <p className="tanggal-blog">6/15/2020, 8:34:06 PM</p>
                        <Link to={`Blog`}>
                            <button className="btn-read-more">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-question-wrap">
                <h1>Have a question?</h1>
                <div className="card-question-flex">
                    <div className="card-question">
                     <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
                     <p>info@hakita.com</p>
                    </div>
                    <div className="card-question">
                     <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
                     <p>Jl. Boulevard Barat Raya No. 27,
                        Kelapa Gading Barat,
                    Jakarta Utara</p>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Blog;