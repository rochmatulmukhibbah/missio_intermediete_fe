
import reactLogo from './assets/react.svg'
import './App.css'
import Banner from './assets/Banner';
import NavigationBar from './assets/NavigationBar';
import KartuProduk from './assets/KartuProduk';
import Footer from './assets/Footer';

function App() {


  return (
    <div className="fcontainer">
    <header><img src="Type=Type5.png"/>
    <ul className="menu">
      <li>kategori</li>
      <img src="ava14.jfif"/>
      </ul>
      </header>
      <div className="box">
      <Banner judulbanner="Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video Interaktif" titlebanner="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman anda." tombol="Temukan Video course untuk dipelajari!"/>
      </div>
      <div className="description">
        <h2>Koleksi Video Pembelajaran Unggulan</h2>
        <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      </div>
      <NavigationBar/>
      <div className="produk">
      <KartuProduk image="maxresdefault.jpg" title="Belajar Smudge Ibispaint X" description="Menggunakan Ibispaint x dari basic" avatar="ava5.jfif" name="Jena Ortega" departemen="Senior Artist" range="3.5(86)" harga="300k"/>
      <KartuProduk image="anime.jfif" title="Belajar Medibang Paint" description="Menggunakan Medibang Paint dari basic" avatar="ava4.jfif" name="Silvia" departemen="Mastering desain" range="3.5(90)" harga="300k"/>
      <KartuProduk image="office.webp" title="MEmbangun Mini Office Sendiri" description="Tips Membangun usaha Mandiri" avatar="ava3.jpg" name="Kelzie" departemen="Guide Business" range="4.0(78)" harga="350k"/>
      <KartuProduk image="design.jfif" title="Panduan Menjual Desain" description="Tips Menjual Desain Ke Platform" avatar="ava.jfif" name="Mustafa Ramadhan" departemen="Freelance" range="4.0(80)" harga="350k"/>
      <KartuProduk image="freelance.jfif" title="Memulai Freelance" description="Memulai Freelance diusia Muda" avatar="ava2.avif" name="Irsyadul Ibad" departemen="Freelance" range="5.0(90)" harga="350k"/>
      </div>
      <div className="produk">
      <KartuProduk image="fundamental.png" title="Marketing Fundamentals" description="Mulai Dari Basic To Up" avatar="ava6.png" name="Jack" departemen="Digital Marketing Fundamental" range="3.5(86)" harga="300k"/>
      <KartuProduk image="strategi.jfif" title="Marketing Strategis" description="Bimbingan strategi dalam Marketing" avatar="ava7.jfif" name="Noah" departemen="Digital Marketing Strategis" range="3.5(90)" harga="300k"/>
      <KartuProduk image="sosmed.jfif" title="Social Media Marketing" description="Bedah Content Sosmed Marketing" avatar="ava8.jfif" name="Emily" departemen="Content Marketing Sosmed" range="4.0(78)" harga="350k"/>
      <KartuProduk image="SEO.jfif" title="SEO Marketing" description="Buat Bisnismu Mudah Ditemukan" avatar="ava9.jfif" name="Ava" departemen="SEO Marketing" range="4.0(80)" harga="350k"/>
      <KartuProduk image="marketplace.jfif" title="Optimasi Marketplace" description="Analisa Data Marketplace" avatar="ava10.jfif" name="Sophie" departemen="Optimasi Marketplace" range="5.0(90)" harga="350k"/>
      </div>
      <div className="produk">
      <KartuProduk image="jacascript.webp" title="Menguasai Javascript" description="Materi Mulai dari basic" avatar="ava11.jpg" name="Grace" departemen="Javascript Specialist" range="3.5(86)" harga="300k"/>
      <KartuProduk image="machinelearning.jfif" title="Machine Learning untuk Pemula" description="Akan Dipandu Sampai Master" avatar="ava12.avif" name="Harry" departemen="Machine learning" range="3.5(90)" harga="300k"/>
      <KartuProduk image="frontend.png" title="Menjadi Front End Developers" description="Menggunakan HTML,CSS,JS" avatar="ava13.avif" name="James" departemen="Front End Developer" range="4.0(78)" harga="350k"/>
      <KartuProduk image="backend.png" title="Menjadi Back End Developers" description="Menggunakan MySQL,PHP" avatar="ava14.jfif" name="Thomas" departemen="Back End Developer" range="4.0(80)" harga="350k"/>
      <KartuProduk image="fullstack.png" title="Menjadi Fullstack Developers" description="Akan Dibimbing Sampai bisa" avatar="ava15.jfif" name="Alfie" departemen="Fullstack Developer" range="5.0(90)" harga="350k"/>
      </div>
      <div className="banerbawah">
      <Banner judulbanner="Mau Belajar Lebih Banyak?" titlebanner="Daftarkan Dirirmu Untuk Mendapatkan Informasi Terbaru Dan Penawaran Spesial Dari Program-Program Terbaik Hariesok.id" tombol="Daftarkan Dirimu Sekarang!"/>
      </div>
      <Footer/>
      </div>
      
  )
}

export default App
