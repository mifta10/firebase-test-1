import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Home/Nav/Nav';
import './Blog.css'


const Blog = () => {
    return (
        <div className="bgMain text-center" style={{ height: '100vh', color: '#fff' }}>
            <Nav />
            <div className="container blog-content my-5">
                <div class="card-deck " style={{}}>
                    <div class="card bgMain blog-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqkeJpMPdGBLUz2VyC8gZYs8WdnmHBpRhKA&usqp=CAU" class="card-img-top" alt="..." />

                        <a href='https://mozumder-tushar02.medium.com/ten-most-important-features-of-javascripts-es6-661add7cfc27' target="_blank" style={{ textDecoration: 'none' }}>
                            <div class="card-body blog-body">
                                <h5 class="card-title">Ten Most Important Features Of JavaScript ES6</h5>
                            </div>
                        </a>

                    </div>
                    <div class="card bgMain blog-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89-Z6psEkHUkK3z46dnOW5v1Zfk6g1M6s7w&usqp=CAU" class="card-img-top" alt="..." />

                        <a href='https://mozumder-tushar02.medium.com/postmortem-of-react-js-in-simple-way-973fbfe7e52' target="_blank" style={{ textDecoration: 'none' }}>
                            <div class="card-body blog-body">
                                <h5 class="card-title">Postmortem of React.js In Simple Way</h5>
                            </div>
                        </a>

                    </div>
                    <div class="card bgMain blog-card">
                        <img src="https://miro.medium.com/max/700/1*int2Cu4gDCW6LIGr1cgKqg.jpeg" class="card-img-top" style={{ height: '195px' }} alt="..." />

                        <a href="https://mozumder-tushar02.medium.com/ten-fundamental-things-of-javascript-c6e0551b7f04" target="_blank" style={{ textDecoration: 'none' }}>
                            <div class="card-body blog-body">
                                <h5 class="card-title">Ten Fundamental Things Of JavaScript</h5>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;