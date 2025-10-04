import '../Home/home.css'
import { HeaderSection } from '../header/header'
import { Footersection } from '../footer/footer'
import './projectpage.css'

export function ProjectPage() {

    return (
        <>
            <HeaderSection />
            <section className="home-hero">
                <div className="home-hero__content">
                    <div className="intro-text">
                        <h1 className='heading-primary'>
                            Video Library (Vedeo Desktop Aplication)
                        </h1>
                    </div>
                    <div className="home-hero__info">
                        <p className="text-primary">
                            The Video Library Application is a full-stack web platform designed to offer a seamless experience for both users and administrators. Built using the MERN stack with TypeScript for the frontend, this project enables users to watch curated video content while providing admin users robust controls to manage the platform's content and users.
                        </p>
                    </div>
                    <div className="home-hero__cta">
                        <a href="assets/project_1.jpeg" className="btn btn--bg">Live Link </a>
                    </div>
                </div>

                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </section>
            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                        <div className="project-details__showcase-img-cont">
                            <img src="assets/project_1.jpeg" alt="Project Image" className="project-details__showcase-img" />
                        </div>
                        <div className="project-details__content-main">
                            <div className="project-details__desc">
                                <h3 className="project-details__content-title">Project Overview</h3>
                                <p className="project-details__desc-para">
                                    MeetingHub leverages the power of Twilio Video APIs to deliver a sophisticated video conferencing
                                    solution. Through its robust architecture, MeetingHub enables real-time, high-quality audio and video
                                    communication, efficiently connecting remote participants across the globe. With a focus on technical
                                    excellence, MeetingHub offers advanced features for seamless virtual meetings, making it a versatile
                                    choice for businesses seeking reliable, scalable, and feature-rich video conferencing capabilities.
                                </p>
                            </div>
                            <div className="project-details__tools-used">
                                <h3 className="project-details__content-title">Tools Used</h3>
                                <div className="skills">
                                    <div className="skills__skill">HTML</div>
                                    <div className="skills__skill">CSS</div>
                                    <div className="skills__skill">JavaScript</div>
                                    <div className="skills__skill">React Js</div>
                                    <div className="skills__skill">Node Js</div>
                                    <div className="skills__skill">GIT</div>
                                    <div className="skills__skill">Material UI</div>
                                    <div className="skills__skill">Twilio Apis</div>

                                </div>
                            </div>
                            <div className="project-details__links">
                                <h3 className="project-details__content-title">See Live</h3>
                                <div className='mobile-viwe-cta-live'>
                                <a href="https://docs.google.com/document/d/1Yx5ud4Xxx9U_-0-mAgjHaiZfo2X7phNRjuSL_iWia-g/edit?usp=sharing" className="btn btn--med btn--theme project-details__links-btn" target="_blank">Live Link</a>
                                <a href="https://github.com/mann2911/VideoApp" className="btn btn--med btn--theme-inv project-details__links-btn" target="_blank">Code Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footersection />
        </>
    )

}