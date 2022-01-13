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
                    {/* <div class="downArrow bounce">
                        <a href='#about'>
                            <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
                        </a>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Home;
