import './App.css'
import Input from './assets/Input';
import InputPsswrd from'./assets/InputPsswrd';
import MyButton from './assets/MyButton';

function App() {
  return (
    <div className="container">
<header><img src="Type=Type5.png"></img></header>
<div className="login">
  <div className="form">
    <div className="content">
      <h2>Pendaftaran Akun</h2>
      <p>Yuk, Daftarkan Akunmu Sekarang Juga!</p>
      <div className="text-input">
        <Input name="Nama Lengkap"></Input>
        <Input name="E-Mail"></Input>
        <Input name="No HP"></Input>
        <InputPsswrd name="Kata Sandi"/>
        <InputPsswrd name="Konfirmasi Kata Sandi"/>
        <h5>Lupa password?</h5>
        <MyButton click="Daftar"/>
        <MyButton click="Masuk"/>
        <div className="atau">atau</div>
        <MyButton click="Masuk dengan Google"/>
        
      </div>
      
    </div>
  </div>
</div>
</div>
  );
}

export default App
