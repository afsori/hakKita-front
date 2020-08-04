import React from 'react';
import './Product.css';

const Product = () =>{
    return(
        <div className="wrapper-product">
            <h1>Product and Services</h1>
            <p className="head-title">Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
            <div className="wrapper-gambar-product">
                <div className="card-product">
                    <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
                    <p className="title-card-product">Otomasi Dokumen</p>
                    <p className="caption-card-product">Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className="card-product">
                    <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
                    <p className="title-card-product">Sistem Manajemen Dokumen</p>
                    <p className="caption-card-product">Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            {/* card pemberitahuan */}
            <div className="wrapper-pemberitahuan">
              <div className="card-pemberitahuan">
                <h1>APAKAH ANDA TAHU:</h1>
                <p>Kalau dari kasus tabrakan, Anda tidak perlu memberi SIM atau KTP kepada orang yang ditabrak</p>
              </div>
            </div>
        </div>
    )
}

export default Product;