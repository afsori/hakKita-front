import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <div className="wrapper-footer">
            <div className="row-alamat">
                <div className="about-us">
                    <h3>About Us</h3>
                    <p>HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen.</p>
                </div>
                <div className="alamat-kantor">
                    <h3>Contact Us</h3>
                    <p>Mail: info@hakita.comAlamat: Jl. Boulevard Barat Raya No.27, RW. 9,Kelapa Gading Barat - Jakarta Utara14240</p>
                </div>
            </div>
            <div className="row-copyright">
                <div className="syarat-dann-ketentuan">
                    <p>Syarat & Ketentuan</p>
                    <p>Kebijakan Privasi</p>
                    <p>Panduan Pembayaran</p>
                </div>
                <div className="copyright">
                    <p>PT Legalindo Mitra Abadi, 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;