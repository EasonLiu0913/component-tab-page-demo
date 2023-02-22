import React, { useState } from 'react';
import '../css/Member.css';
import Signin from './component/Signin';
import Signup from './component/Signup';

export default function Member() {
    const [page, setPage] = useState('signup');

    function handlePage(page) {
        setPage(page);
    }
    return (
        <>
            <header>
                <h2>全館免運</h2>
            </header>

            <nav>
                <div class="nav-container">
                    <div class="logo">
                        <img src="https://fakeimg.pl/100x50/?text=logo" />
                    </div>
                    <div class="page-links">
                        <ul>
                            <li>
                                <a href="#">首頁</a>
                            </li>
                            <li>
                                <a href="#">寵物商城</a>
                            </li>
                            <li>
                                <a href="#">寵物飯店</a>
                            </li>
                            <li>
                                <a href="#">寵物活動</a>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-btns-area">
                        <div class="signInUp-btn">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div>
                                <span>登入|註冊</span>
                            </div>
                        </div>
                        <div class="shoppingCart-btn">
                            <div>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div>購物車</div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div class="form-area">
                    <div class="form-header">
                        <button
                            class="bg-primary"
                            onClick={() => handlePage('signup')}
                        >
                            註冊
                        </button>
                        <button onClick={() => handlePage('signin')}>
                            登入
                        </button>
                    </div>
                    <div class="form-body">
                        {console.log('signup', page)}
                        {page && page === 'signup' ? <Signup /> : <Signin />}
                    </div>
                </div>
            </main>
        </>
    );
}
