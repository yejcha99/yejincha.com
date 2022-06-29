import React from "react";
import Typed from "react-typed";
import '@fortawesome/fontawesome-free/js/brands.js';

const Home = () => {
    return (
        <>
            <section id="intro">
                <div className='container-intro'>
                    <img class="home-image" src="background_image.png" alt="background"/>
                    {/* <div class="intro-text">
                        <h1 class="intro-header">Yejin Cha</h1>
                        <h2 class="intro-head-des">
                            <Typed
                                className="typed-text"
                                strings={['Hello World! I am Yejin', 'Want to know more about me?']}
                                typeSpeed={40}
                                backSpeed={60}
                                loop /></h2>
                    </div> */}
                    <div className="social">
                        <a className="linkedin-icon item" href="https://in.linkedin.com/in/yejincha">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <a className="github-icon item" href="https://www.github.com/yejcha99">
                        <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a className="email-icon item" href="mailto:yejincha@seas.upenn.edu">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
