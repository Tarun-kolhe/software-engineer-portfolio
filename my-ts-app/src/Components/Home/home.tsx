import { useEffect, useState } from 'react'
import './home.css'
import axios from "axios";
import type { UserHomepageContract } from '../../Contracts/homecontracts';
import { Typewriter } from 'react-simple-typewriter'
import { SocialComponent } from '../social/socialcomp'

export function HomePage() {

    const [userHomepage, setUserHomepage] = useState<UserHomepageContract>();

    function getHomePageData() {
        axios.get('dataconfighome.json')
            .then((res) => {
                console.log(res.data)
                setUserHomepage(res.data);
            })
            .catch((err) => {
                console.log("Error while fetching data from config file", err);
            });
    }
    useEffect(() => {
        getHomePageData();
    }, [])
    

    return (
        <>
            <section className="home-hero">
                <div className="home-hero__content">
                    <div className="intro-text">
                        <h1 className='heading-primary'>
                            {`${userHomepage?.greetings} `}&nbsp;
                            <span className="dynamic-text">
                                <span style={{ visibility: 'hidden', position: 'absolute' }}>
                                    {userHomepage?.typewords?.reduce((a, b) => (a.length > b.length ? a : b), '')}
                                </span>
                                {Array.isArray(userHomepage?.typewords) && userHomepage.typewords.length > 0 && (
                                    <Typewriter
                                        words={userHomepage.typewords}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                )}


                            </span>
                        </h1>
                    </div>
                    <div className="home-hero__info">
                        <p className="text-primary">
                            {
                                userHomepage?.description
                            }
                        </p>
                    </div>
                    <div className="home-hero__cta">
                        <a href={userHomepage?.ctadetail.ctaLink} className="btn btn--bg">{userHomepage?.ctadetail.ctaLabel}</a>
                    </div>
                </div>

                <SocialComponent sociallinks={userHomepage?.socialLinks || []} placeholder='homepage-desktop' />

                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
            </section>
        </>
    )
}