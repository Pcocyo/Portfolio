import React,{useMemo,useState}from 'react'

import { AnimatedChildProps,createChildVariants } from './constant'
import {motion} from 'framer-motion'
const AnimatedChild: React.FC<AnimatedChildProps> = ({ className, children, hover, x, double}) => {
    const variant = useMemo(()=>createChildVariants(x), [x])
    return (
        <motion.div
            className={className}
            variants={variant}
            animate={hover ? double ? "Rhover": "hover" : "animate"}
            whileHover={'individualHover'}
        >
            {children}
        </motion.div>
    )
}
const ProjectAnimate: React.FC = () => {
    const [hover, setHover] = useState(false);
    const projectList = ['Project 1','Project 2','Project 3','Project 4']
    return (
        <div className='flex flex-col h-full justify-center items-start'>
            <motion.div className=" border h-fit w-[80%] p-[21px]"
            initial={{
                borderWidth:'0px',
                borderColor:'#040B15',
                borderRadius:'0px'
            }}
            whileHover={{
                borderWidth:'1px',
                borderColor:'#F26051',
                borderRadius:'7px',
                transition:{
                    duration:0.48
                }
            }}
            onMouseEnter={()=>setTimeout(()=>setHover(true),500)}
            onMouseLeave={()=>setTimeout(()=>setHover(false),500)}>
                {projectList.map((ele,i)=>{
                    return (
                        <AnimatedChild
                            key={i}
                            className="h-[100px] w-[50%] bg-[#0B2B44] cursor-pointer rounded-md my-[21px]"
                            hover={hover}
                            x={i%2==0?[`100%`,`${i}0%`]:[`${i}0%`,`100%`]}
                            double={i%2===0}>
                            {ele}
                        </AnimatedChild>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default ProjectAnimate