import React from "react";
import '@fortawesome/fontawesome-free/js/brands.js';

const Contact = () => {
    return (
        <section className='contact'>
            <div>
                <h3 className='contact-info'>
                    You can contact me via:
                </h3>
                <div className="social-contact">
                    <a className="email-icon item" href="mailto:yejincha@seas.upenn.edu">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <p>yejincha@seas.upenn.edu</p>
                    </a>
                    <a className="linkedin-icon item" href="https://in.linkedin.com/in/yejincha">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        <p>@yejincha</p>
                    </a>
                    <a className="github-icon item" href="https://www.github.com/yejcha99">
                        <i className="fa fa-github" aria-hidden="true"></i>
                        <p>@yejcha99</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;