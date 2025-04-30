import React from 'react'
import {motion} from 'framer-motion'
import { AboutTextVariants,AboutTitleStyle,AboutTextStyle,AboutNavigationStyle} from './constant'
const AboutText: React.FC = () => {
    return (
        <div className="my-12 lg:my-0 w-full px-[21px] lg:px-0 pt-[42px] lg:pt-0 lg:pl-[35px]" id='AboutTitle'>
            <h1 className={AboutTitleStyle}>
                ABOUT
            </h1>
            <p 
                className={AboutTextStyle}
                id='AboutText'
            >
                Hey, Im Elson But you can call me Pocoyo. I’m a Full Stack developer. Nice meeting you
            </p>
            <div 
                className="flex justify-center lg:justify-start text-[28px] lg:text-[35px] gap-[35px] mb-0 lg:mb-[14px]"
                id='AboutNavigation'
            >
                <motion.a
                    className= {AboutNavigationStyle}
                    variants={AboutTextVariants}
                    whileHover='whileHover'
                    href='#Contact'
                >
                    Contact
                </motion.a>
                <motion.a className={AboutNavigationStyle}
                    variants={AboutTextVariants}
                    whileHover='whileHover'
                    href='#Project'>
                    Project
                </motion.a>
            </div>
        </div>
    )
}

export default AboutText