import { useEffect, useState } from 'react';
import './about.css'
import type {AboutSection} from '../../Contracts/aboutcontract'
import axios from 'axios';


export function AboutMeSection() {
    const [aboutconfigdata,setaboutconfigdata]=useState<AboutSection>()

    function loadAboutData(){
        axios.get("dataconfigabout.json")
        .then((res)=>{
            console.log(res.data);  
            setaboutconfigdata(res.data) 
        })
        .catch((err)=>{
          console.log("getting error while fetching data "+err);  
        })
    }

    useEffect(()=>{
        loadAboutData();
    },[])
    
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">{aboutconfigdata?.aboutheader}</span>
          <span className="heading-sec__sub">{aboutconfigdata?.aboutdescription}</span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">{aboutconfigdata?.aboutmoretitle}</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">{aboutconfigdata?.aboutmoredescription}</p>
              <p className="about__content-details-para">{aboutconfigdata?.aboutmoredescriptiontwo}</p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">{aboutconfigdata?.contactcta}</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">{aboutconfigdata?.labelmyskills}</h3>
            <div className="skills">
                {
                  aboutconfigdata?.skills.map((labelskill,ind)=>{
                     return <div key={ind} className="skills__skill">{labelskill.labelskill}</div>
                  })
                }
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
