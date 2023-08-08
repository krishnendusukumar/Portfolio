import React from 'react'
import { useTypewriter, cursor } from 'react-simple-typewriter'
import Resume from '../../Resume/Krishnendu__resume.pdf'
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService'

function Profile() {
    const [typeEffect] = useTypewriter({
        words: ['React Dev', 'Frontend dev', 'Problem Solver', 'Competitive Programmer'],
        loop: {},
        typeSpeed: 100,
        delete: 40
    })

    return (
        <div className='profile-container'>
            <div className='profile-parent' >
                <div className='profile-details' >
                    <div className='colz' >
                        <div className="colz-icon">
                            <a href='#'>
                                <i class="cib-leetcode"></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/krishh__sharma/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/krishnendu-sukumar'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'M
                            <span
                                className='highlighted-text'>
                                {" "}
                                Krishnendu
                            </span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" : "}

                                {typeEffect}
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        {""}
                        Hire me{" "}
                    </button>
                    <a href={Resume} download="Krishnendu resume.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
    )
}

export default Profile
