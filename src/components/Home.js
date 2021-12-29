import React from "react";
import Typed from "react-typed";

const Home = () => {
    return (
        <section id="intro">
        <div className= 'container'>
            <div class="intro-text">
            <h1 class="intro-header">Yejin Cha</h1>
            <h2 class="intro-head-des"> I am a
            <Typed 
            className="typed-text" 
            strings={['Software Engineer', 'Data Scientist']} 
            typeSpeed={40}
            backSpeed={60}
            loop
            /></h2>
            <p class="main-intro-des">
            Hello! I am a first year masters student studying computer science at the <span class="highlight">University of Pennsylvania.</span> <br />
            I am interested in <span class="highlight"> data science, web/app development, and AI.</span><br />
            </p>
            </div>
        </div>
        </section>
    );
}

export default Home;
