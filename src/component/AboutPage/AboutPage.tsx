import React from 'react'
import { AbooutPageProps } from './type'
import AboutText from './AboutText'
import ProjectAnimate from '../ProjectAnimate/ProjectAnimate'
const AboutPage: React.FC<AbooutPageProps> = ({ className }) => {
    return (
        <div className={className} id='About'>
            <div className="lg:mt-[50px] lg:grid lg:grid-cols-[40%_60%]" id='AboutContent'>
                <div className="lg:pl-[42px] lg:justify-center lg:flex lg:flex-col lg:h-[100vh]">
                    <AboutText />
                </div>
                <div className="hidden lg:block ">
                    <ProjectAnimate/>
                </div>
            </div>
        </div>
    )
}


export default AboutPage