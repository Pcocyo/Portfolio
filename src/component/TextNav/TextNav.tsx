import React from 'react'
import { motion } from 'framer-motion'
import {links, linkVariants} from './constant'
import { useNavigationContext} from './useNavigationContext'
import { NavigationContextType } from '../../ContextProvider'
import { TextNavProps } from './type'

const TextNav: React.FC<TextNavProps> = ({className}) => {
    const {navigationContext,setNavigationContext} = useNavigationContext()
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        const linkName = e.currentTarget.innerText as NavigationContextType
        if (linkName !==  navigationContext) {
            setNavigationContext(linkName)
        }
    }
    return (
        <div className={className}>
            {links.map((ele, i) => {
                return (
                    <motion.a
                        className="[writing-mode:vertical-lr] text-[21px] cursor-pointer"
                        variants={linkVariants}
                        custom={navigationContext===ele}
                        href={`#${ele}`}
                        initial='initial'
                        animate='animate'
                        whileHover='whileHover'
                        onClick={(e) => { handleClick(e) }}
                        key={i}>
                        {ele}
                    </motion.a>
                )
            })}
        </div>

    )
}

export default TextNav