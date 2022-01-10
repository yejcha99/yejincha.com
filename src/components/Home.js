import React from "react";
import Typed from "react-typed";
import '@fortawesome/fontawesome-free/js/brands.js';

const Home = () => {
    return (
        <>
            <section id="intro">
                <div className='container-intro'>
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
                    <div class="downArrow bounce">
                        <a href='#about'>
                            <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
                        </a>
                    </div>
                </div>
            </section>
            {/***********About me**********/}
            <section id="about">
                <div className="container">
                <h3 className='about-me-title'>About me</h3>
                <div className="about-container">
                    <div id="profile-images">
                        <img class="profile" src="yejin.png" alt="yejin" />
                    </div>
                    <div id="about-description">
                        <div class="main-intro-des">
                            <span className='code'>Hello! I am Yejin (pronounced Yay-Gin)</span> <br />
                                I am a Master's student pursuing Computer and Information Science at the <span class="highlight">University of Pennsylvania.</span> <br />
                                I got my B.A. in Computer Science at Colgate University in May 2021. <br />
                                During my undergraduate years, I've worked as a research fellow in Bioinformatics project. <br />
                                Outside of school, I enjoy dancing and taking photos. <br />
                                <br />
                                <div class="row">
                                    <div class="col-md-5">
                                        <h3 className='about-me-small-title'>Interests</h3>
                                        <ul class="ul-interests">

                                            <li>Web/App Development</li>

                                            <li>Data Science</li>

                                            <li>Machine Learning</li>

                                        </ul>
                                    </div>
                                    <div class="col-md-7">
                                        <h3 className='about-me-small-title'>Education</h3>
                                        <ul class="fa-ul">
                                            <li>
                                                <i class="fa fa-graduation-cap edu-logo" />
                                                <div class="description">
                                                    <p class="course">MSE in CIS, '2023</p>
                                                    <p class="institution">University of Pennsylvania</p>
                                                </div>
                                            </li>

                                            <li>
                                                <i class="fa fa-graduation-cap edu-logo" />
                                                <div class="description">
                                                    <p class="course">BA in Computer Science, 2021</p>
                                                    <p class="institution">Colgate University</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
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
                    <div className='container'>
                        <div class="flex-container">
                            <div class="item">
                                <h3 className='about-me-small-title'>Python</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>Java</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>HTML</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>CSS</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>Javascript</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>MATLAB</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>React</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>MongoDB</h3>
                            </div>
                            <div class="item">
                                <h3 className='about-me-small-title'>Node.js</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/***********Experiences**********/}
            <section id="Experiences">
                <div class="skill-section">
                    <h3 className='about-me-title'>Experience</h3>
                    <div class="wrapper">
                        <div class="timeline">
                            <dl class="timeline--entry">
                                <dt class="timeline--entry__title">September 2021</dt>
                                <dd class="timeline--entry__detail">Started CIS Masters program @ UPenn!</dd>
                            </dl>
                            <dl class="timeline--entry">
                                <dt class="timeline--entry__title">May 2021</dt>
                                <dd class="timeline--entry__detail"> Graduated from Colgate University with a BA in CS and minor in Mathematical Systems Biology. Magna Cum Laude and Honors in CS :)</dd>
                            </dl>
                            <dl class="timeline--entry">
                                <dt class="timeline--entry__title">May 2020 - August 2021</dt>
                                <dd class="timeline--entry__detail">Worked on a Bioinformatics Research Project <i>Modeling Circadian Clock to Display Link Between SNPs and SAD</i> with Dr. Ahmet Ay and Dr. Krista Ingram. Paper has been submitted to the Journal of Affective Disorder and now is under review.</dd>
                            </dl>
                            <dl class="timeline--entry">
                                <dt class="timeline--entry__title">July 2020</dt>
                                <dd class="timeline--entry__detail">Co-founded <i>SkinEd</i>, a data-based online educational resource that provides easy access to information on
different skincare ingredients to educate customers and increase transparency in the cosmetic industry.</dd>
                            </dl>
                            <dl class="timeline--entry">
                                <dt class="timeline--entry__title">May 2019 - August 2019</dt>
                                <dd class="timeline--entry__detail">Research Fellow for <i>Measurements of primary biological aerosol in Upstate NY</i> under the guidance of Dr. Anne Perring.</dd>
                            </dl>
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
                                    <img src="img/html.png" alt='html'/>
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
