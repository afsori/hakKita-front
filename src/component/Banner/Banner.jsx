import React ,{Component} from 'react';
import './Banner.css';
class Banner extends Component{
    render(){
        return(
            <div className="wrapper-banner">
                <div className="container-banner">
                    <p>URUSAN LEGAL JADI LEBIH </p>
                    <p>GAMPANG DENGAN HAKITA</p>
                    <button>Baca Artikel</button>
                </div>
            </div>
        )
    }
}

export default Banner