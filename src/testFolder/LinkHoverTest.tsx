import {motion} from 'framer-motion'
import '../test.css'
const LinkHoverTest=()=>{
    return(
        <>
            <motion.div
                className='rotated-text'
                 animate={{ x: 100 }}
                 whileHover={{ rotate: -90 }}
            >
                this is transition
            </motion.div>
        </>
    );
};

export default LinkHoverTest;