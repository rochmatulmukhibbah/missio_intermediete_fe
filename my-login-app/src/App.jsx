import './App.css'
import Input from './assets/Input';
import MyButton from './assets/MyButton';

function App() {
  return (
    <div className="container">
<header><img src="Type=Type5.png"></img></header>
<div className="login">
  <div className="form">
    <div className="content">
      <h2>Masuk dengan Akun</h2>
      <p>Yuk, lanjutin belajarmu di videobelajar</p>
      <div className="text-input">
      <p>E-mail</p>
      <input type="text"></input>
        <p>Kata sandi</p>
      <input type="password"></input>
        <h5>Lupa password?</h5>
        <MyButton click="Masuk"/>
        <MyButton click="Daftar"/>
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
