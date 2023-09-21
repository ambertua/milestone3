import React from 'react';
import './App.css';
import Carousel from './Carousel';

function App() {
    return (
        <div className="App">
            <header>
                <div className="logo" style={{ color: 'white' }}>AMBR SWIM</div>
                <nav>
                    <ul>
                        <li><a href="/store/public/index.html" style={{ color: 'white' }}>Home</a></li>
                        <li><a href="/store/src/pages/shop.html" style={{ color: 'white' }}>Shop</a></li>
                        <li><a href="/store/src/pages/cart.html" style={{ color: 'white' }}>Cart</a></li>
                        <li><a href="/store/src/pages/login.html" style={{ color: 'white' }}>Login</a></li>
                    </ul>
                </nav>
            </header>

            <Carousel />

            <footer>
                <p>&copy; 2023 AMBR SWIMWEAR</p>
            </footer>
        </div>
    );
}

export default App;
