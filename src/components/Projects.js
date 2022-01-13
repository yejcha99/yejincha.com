import React from "react";
import '@fortawesome/fontawesome-free/js/brands.js';

const Projects = () => {
    return (
        <>
            {/***********Projects**********/}
            <section id="Projects">
                <div class="skill-section">
                    <h3 className='about-me-title'>Projects</h3>
                        <div className="container-project">
                            <div class="quadDiv">
                                <a href="https://github.com/yejcha99/yejincha.com">
                                    <img src="yejincha.jpg" class="quad" alt="yejincha.com" />
                                </a>
                                <div class='imageContainer'></div>
                            </div>
                            <div class="quadDiv">
                                <a href="https://github.com/yejcha99/Guess-the-celebrity">
                                    <img src="guess-the-celebrity.jpg" class="quad" alt="guess-the-celebrity" />
                                </a>
                                <div class='imageContainer'></div>
                            </div>
                            <div class="quadDiv">
                                <a href="https://cis557-team19-finalproject.herokuapp.com">
                                    <img src="social-media.jpg" class="quad" alt="social-media-app" />
                                </a>
                                <div class='imageContainer'></div>
                            </div>
                            <div class="quadDiv">
                                <a href="https://github.com/yejcha99/Olympic-oracles">
                                    <img src="OlympicsOracles.jpg" class="quad" alt="olympics-oracles" />
                                </a>
                                <div class='imageContainer'></div>
                            </div>
                            <div class="quadDiv">
                                <img src="more.jpg" class="quad" alt="more" />
                                <div class='imageContainer'></div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
