import {motion} from 'framer-motion';
import {useState} from 'react'
const AnimateButton = () => {
    const [animateDiv, setAnimateDiv] = useState({ scale: 0, opacity: 0 })
    const handleAnimation = () => {
        setAnimateDiv({ scale: 1, opacity: 1 })
    }
    return (
        <>
            <motion.div
                className='text-3xl text-blue-600'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ ...animateDiv }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            > hello</motion.div>

            <button className="bg-cyan-300 p-2 rounded 2xl"onClick={handleAnimation}>Animate Div</button>
        </>
    )
}

export default AnimateButton;