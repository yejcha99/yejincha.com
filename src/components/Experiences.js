import React from "react";

const Experiences = () => {
    return (
        <>
            {/***********Experiences**********/}
            <section id="Experiences">
                <div class="skill-section">
                    <h3 className='about-me-title'>Experiences</h3>
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
        </>
    );
}

export default Experiences;
