import React from 'react'
import { motion } from 'framer-motion'
import {links, linkVariants} from './constant'
import { useNavigationContext} from './useNavigationContext'
import { NavigationContextType } from '../../ContextProvider'

const TextNav: React.FC = () => {
    const {navigationContext,setNavigationContext} = useNavigationContext()
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        const linkName = e.currentTarget.innerText as NavigationContextType
        if (linkName !==  navigationContext) {
            setNavigationContext(linkName)
        }
    }
    return (
        <aside className='hidden md:border md:border-yellow-500 md:h-[60vh] md:w-[50px] md:fixed md:top-[25%] md:right-0 md:flex md:flex-col md:justify-around md:items-end md:mr-[14px]'>
            {links.map((ele, i) => {
                return (
                    <motion.a
                        className="[writing-mode:vertical-lr] text-[21px] cursor-pointer"
                        variants={linkVariants}
                        custom={navigationContext===ele}
                        initial='initial'
                        animate='animate'
                        whileHover='whileHover'
                        onClick={(e) => { handleClick(e) }}
                        key={i}>
                        {ele}
                    </motion.a>
                )
            })}
        </aside>

    )
}

export default TextNav