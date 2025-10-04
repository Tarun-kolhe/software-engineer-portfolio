import './footer.css' 
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import type {UserHomepageContract} from '../../Contracts/homecontracts'
import {SocialComponent} from '../social/socialcomp'

export function Footersection() {
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
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">

                    <div className="main-footer__row main-footer__row-2">
                        <h4 className="heading heading-sm text-lt">
                            Tarun Kolhe<br />
                        </h4>
                        <p className="main-footer__short-desc">
                            {/* Add a short description here */}
                        </p>
                    </div>
                </div>
                  <SocialComponent sociallinks={userHomepage?.socialLinks || []} placeholder='Footer-mobile'/>              
                <div className="main-footer__lower">
                    © Copyright 2024. Made by ❤️{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="mailto:tarunkolhe1505@gmail.com"
                    >
                        Mr. Tarun 
                    </a>
                </div>
            </div>
            
        </footer>
    );
}
