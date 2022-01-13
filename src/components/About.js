import React from "react";
import '@fortawesome/fontawesome-free/js/brands.js';

const About = () => {
    return (
        <>
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
                                During my undergraduate years, I've worked as a Bioinformatics Research fellow. <br />
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
        </>
    );
}

export default About;
