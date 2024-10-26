import { motion } from 'framer-motion'

const MovingA = () => {
    return (
        <>
            <motion.div
                 animate={{ x: 100 }}
                 transition={{ ease: "easeOut", duration: 2 }}
            >
                this is transition
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
            >
                this is start to finish
            </motion.div>
            <motion.div
                animate={{ x: [0, 100, 0] }}
                initial={false}
            >
                this is keyframe initial false
            </motion.div>

            <motion.div
                animate={{ x: [null, 100, 0] }}
            >
                this is keyframe
            </motion.div>
        </>


    )
}

export default MovingA;