import React, { useState, useEffect } from 'react'
import ScrrenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription =
        ScrollService.currentScreenFadIn.subscribe(fadeInScreenHandler);

    //Reusable minor component
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromData && props.toDate ? (
                        <div className="heading-date">
                            {props.fromData + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : " "}</span>
                </div>
            </div>
        );
    };

    //static resume data for the labels

    const resumeBullet = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillDetails = [
        { skill: "Javascript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "Front end", ratingPercentage: 80 },
        { skill: "C++", ratingPercentage: 95 },
        { skill: "CSS", ratingPercentage: 87 },
        { skill: "HTML", ratingPercentage: 83 },
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio website",
            duration: { fromDate: "2022", toDate: "2023" },
            description: "A personal portfolio website to showcase all my details and projects at one",
            subHeading: "Technologies Used: React JS, Boostrap",
        },
        {
            title: "Typing WPM",
            duration: { fromDate: "2022", toDate: "2023" },
            description: "Let’s you test your typing speed with dashing UI and simple implementation, dark mode and toggle time is added as extra features.",
            subHeading: "Technologies Used: React JS, Bulma css",
        },
        {
            title: "Movie Hunt",
            duration: { fromDate: "2022", toDate: "2023" },
            description: "Movie search application using REACT JS using OMDb API, allows a user to search for movies and find movies with certain filters such as genre and language",
            subHeading: "Technologies Used: React JS, Boostrap, OMDB API",
        },
    ];


    const education = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Kiet Group Of Institutions"}
                subHeading={"BACHELOR OF TECHNOLOGY"}
                fromData={"2019"}
                toDate={"2023"}
            />
            <ResumeHeading
                heading={"Intermediate"}
                subHeading={"Gagan Public School"}
                fromData={"2018"}
                toDate={"2019"}
            />
            <ResumeHeading
                heading={"High School"}
                subHeading={"Wisdom Public School"}
                fromData={"2016"}
                toDate={"2017"}
            />
        </div>
    ]

    const workExperience = [
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Frontend Developer"}
                    subHeading={"Codeprism Technologies"}
                    fromData={"2023"}
                    toDate={"2023"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Worked as a React JS developer for dynamic and classic looking frontend</span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Worked on interface of Heartfullness web app which has 5 lakhs monthly users, uses GRPCs for calling
                        the data from backend. React js, typescript are the technologies used.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Worked on Qwik framework to transfer company’s work for faster loading of websites.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Integrated the web app with backend services to create welcome user application with dynamic form content.
                    </span>
                    <span className="resume-description-text">
                        - I stretch my mental capacity to develope UI as per the given designs.
                    </span>
                    <br />
                </div>
            </div>
        </div>
    ]

    const programmingSkills = [
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skills, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skills.skill}</span>
                    <div className="skill-percentage">
                        <div style={{ width: skills.ratingPercentage + "%" }} className="active-percentage-bar">

                        </div>
                    </div>
                </div>
            ))}
        </div>
    ];

    const projectsWorks = [
        <div className="resume-sreen-container" key="projects">
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={programmingSkillDetails?.subHeading}
                    description={projectDetails?.description}
                    fromData={programmingSkillDetails.duration?.fromData}
                    toDate={programmingSkillDetails.duration?.toDate}
                />
            ))}
        </div>
    ];

    const interests = [
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading='Blog Writing'
                description="Like to write blogs on Basic Financial Understanding of the Indian Society, also running to active blogs on it"
            />
            <ResumeHeading
                heading='Table Tennis'
                description="Apart from being a tech enthusiast and a code writer, I love to play Table Tennis, also acheived a 2nd rank while playing at the District Level"
            />
            <ResumeHeading
                heading='Cricket'
                description="I like to challenge my reflexes a lot while competing in football, interactive gaming sessions excites me the most"
            />
        </div>
    ];


    const handleCarousel = (index) => {
        let offsetHeight = 360;
        let newCarouselOffset = {
            style: { transform: "translateY (" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarouselOffset)
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullet.map((bullet, index) => (
            <div
                onClick={() => handleCarousel(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="no internet connection" />
                <span className="bullet-label">{bullet.label}</span>

            </div>
        ))
    }


    const getResumeScreen = (index) => {
        return (
            <div style={carousalOffSetStyle.style}
                className='resume-details-carousal'
            >
                {
                    index === 0 ? education :
                        index === 1 ? workExperience :
                            index === 2 ? programmingSkills :
                                index === 3 ? projectsWorks : interests
                }
            </div>

        )
    }
    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);


    return (
        <div className='resume-container screen-container fade-in' id={props.id || ""}>
            <div className="resume-content">
                <ScrrenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullets-details">{getResumeScreen(selectedBulletIndex)}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume
