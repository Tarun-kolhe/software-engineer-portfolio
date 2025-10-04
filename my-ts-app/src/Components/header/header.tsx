import { useState, useEffect } from "react";
import axios from "axios";
import type { UserHomepageContract } from "../../Contracts/homecontracts";
import { HashLink as Link } from 'react-router-hash-link';
import '../Home/home.css';
import '../header/header.css';

export function HeaderSection() {
    const [userHomepage, setUserHomepage] = useState<UserHomepageContract>();
    const [menuOpen, setMenuOpen] = useState(false);

    function getHomePageData() {
        axios.get('dataconfighome.json')
            .then((res) => {
                console.log(res.data);
                setUserHomepage(res.data);
            })
            .catch((err) => {
                console.log("Error while fetching data from config file", err);
            });
    }

    useEffect(() => {
        getHomePageData();
    }, []);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className='header'>
            <div className="header-main">
                <div className="header-left-section">
                    <img src={userHomepage?.logoimage} alt="logo" className="logoimage" />
                    <div className="username-label">{userHomepage?.username}</div>
                </div>

                <div className="hamburger-icon" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Desktop Menu */}
                <div className="header-right-section">
                    {
                        userHomepage?.headerLinks.map((link, ind) => {
                            const sectionId = link.label.toLowerCase();
                            return (
                                <Link
                                    smooth
                                    to={`/#${sectionId}`}
                                    key={ind}
                                    className="nav-link"
                                >
                                    {link.label}
                                </Link>
                            );
                        })
                    }
                </div>

                {/* Mobile Navigation Menu */}
                {menuOpen && (
                    <div className="mobile-menu">
                        {
                            userHomepage?.headerLinks.map((link, ind) => {
                                const sectionId = link.label.toLowerCase();
                                return (
                                    <div key={ind}>
                                        <Link
                                            smooth
                                            to={`/#${sectionId}`}
                                            onClick={() => setMenuOpen(false)}
                                            className="nav-link"
                                        >
                                            {link.label}
                                        </Link>
                                        <div className="bottom-line"></div>
                                    </div>
                                );
                            })
                        }
                    </div>
                )}
            </div>
        </header>
    );
}
