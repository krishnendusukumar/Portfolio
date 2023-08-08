import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import Resume from '../Resume/Krishnendu__resume.pdf'
import './AboutMe.css'


const AboutMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANT = {
        desccription: "React js develeloper, Likes to drill my skills in frontend development, have 2 months of working experience as a frontend developer Intern at Codeprism Technologies, have good interest in Logic building, solving problem and project making.",
        highlights: {
            bullets: [
                "React developer and Frontend developer",
                "Redux for State management",
                "Interactive front end as per the design",
                "Competitive programming and Problem solving",
                "Projects making",
            ],
            heading: "Here are a few Highlights: ",

        }

    }

    const renderHighlight = () => {
        return (
            SCREEN_CONSTANT.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className='about-me-description'>
                            {SCREEN_CONSTANT.desccription}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>
                                    {SCREEN_CONSTANT.highlights.heading}
                                </span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
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
                </div>
            </div>

        </div>
    )
}

export default AboutMe
