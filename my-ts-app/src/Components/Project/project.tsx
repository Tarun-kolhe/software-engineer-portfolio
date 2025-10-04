import './project.css'
import '../About/about.css'
import { useEffect, useState } from 'react';
import type { ProjectSection } from '../../Contracts/projectcontract'
import axios from 'axios';

export function ProjectSection() {

    const [projectdetails, setprojectdetails] = useState<ProjectSection>()
    function loadprojectsection() {
        axios.get("dataconfigproject.json")
            .then((res) => {
                setprojectdetails(res.data)
            })
            .catch((err) => {
                console.log(`Issue while fetching data  ${err}`);

            })
    }
    useEffect(() => {
        loadprojectsection()
    }, [])

    return (
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">{projectdetails?.labelProject}</span>
                    <span className="heading-sec__sub">{projectdetails?.projectLabelDescription}</span>
                </h2>
                {
                    projectdetails?.projects.map((project, ind) => {
                        return <div key={ind}className="projects__content">
                            <div className="projects__row">
                                <div className="projects__row-img-cont">
                                    <img
                                        src={project.projectImage}
                                        alt="Software Screenshot"
                                        className="projects__row-img"
                                        loading="lazy"
                                    />
                                </div>


                                <div className="projects__row-content">
                                    <h3 className="projects__row-content-title">{project.projectTitle}</h3>
                                    <p className="projects__row-content-desc">{project.projectDescription}</p>
                                    <a className="btn btn--med btn--theme dynamicBgClr" href="/projectpage" target="_blank">{project.projectLinkLabel}</a>
                                </div>


                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
}
