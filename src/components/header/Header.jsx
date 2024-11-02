import { useState } from 'react';
import logo from '../../assets/react.svg';
import './Header.css';
const Header = () => {
  const logoName = 'Aimir company';
  const [isSignIn, setSignIn] = useState(false);
  return (
    <header className="header">
      <h1>{logoName}</h1>
      <div className="header__list">
        <div className="header__item">About</div>
        <div className="header__item">Shop</div>
        <div className="header__item">Service</div>
      </div>
      {!isSignIn && <button onClick={() => setSignIn(true)}>Войти</button>}
      {isSignIn && <img src={logo} />}
    </header>
  );
};

export default Header;
