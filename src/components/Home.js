import React from "react";
import Typed from "react-typed";
import '@fortawesome/fontawesome-free/js/brands.js';

const Home = () => {
    return (
        <>
            <section id="intro">
                <div className='container'>
                    <div class="intro-text">
                        <h1 class="intro-header">Yejin Cha</h1>
                        <h2 class="intro-head-des">
                            <Typed
                                className="typed-text"
                                strings={['Hello World! I am Yejin', 'Want to know more about me?']}
                                typeSpeed={40}
                                backSpeed={60}
                                loop /></h2>
                    </div>
                    <div className="social">
                        <a class="linkedin-icon" href="https://in.linkedin.com/in/viandjianto">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <a class="github-icon" href="https://www.github.com/yejcha99">
                        <i class="fab fa-github" aria-hidden="true"></i>
                        </a>
                        <a class="email-icon" href="mailto:yejincha@seas.upenn.edu">
                            <i class="far fa-envelope" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div class="downArrow bounce">
                        <a href='#about'>
                            <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
                        </a>
                    </div>
                </div>
            </section>
            {/***********About me**********/}
            <section id="about-me">
                <div className="container">
                <h3 className='about-me-title'>About me</h3>
                <div className="about-container">
                    <div id="profile-images">
                        <img class="profile" src="yejin.png" alt="yejin" />
                    </div>
                    <div id="about-description">
                        <div class="main-intro-des">
                            <span className='code'>Hello!</span> <br />
                                I am a Master's student pursuing Computer and Information Science at the <span class="highlight">University of Pennsylvania.</span> <br />
                                I got my B.A. in Computer Science at Colgate University in May 2021. <br />
                            <br />
                                I am interested in <span class="highlight"> data science, web/app development, and AI!</span><br />
                            <br />
                            <a href="Yejin_Resume.pdf" target="_blank">
                                <div class="resume-frame">
                                    <div class="resume-button">
                                    <span>View my resume</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/***********Skills**********/}
            <section id="skills">
                <div class="skill-section">
                <h3 className='about-me-title'>Skills</h3>
                    <div className="container">
                        <div className="skill-box">
                            <div class="skill-title">
                                <div class="img">
                                    <img src="img/html.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/***********Experiences**********/}
            <section id="Experiences">
                <div class="skill-section">
                <h3 className='about-me-title'>Experiences</h3>
                    <div className="container">
                        <div className="skill-box">
                            <div class="skill-title">
                                <div class="img">
                                    <img src="img/html.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/***********Projects**********/}
            <section id="Projects">
                <div class="skill-section">
                <h3 className='about-me-title'>Projects</h3>
                    <div className="container">
                        <div className="skill-box">
                            <div class="skill-title">
                                <div class="img">
                                    <img src="img/html.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
