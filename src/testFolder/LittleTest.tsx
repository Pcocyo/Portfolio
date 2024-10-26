import { useState } from "react";
import { motion } from 'framer-motion';
import '../test.css'

{/* <motion.div
                className='rotated-text'
                 animate={{ x: 100 }}
                 whileHover={{ rotate: -90 }}
            >
                this is transition
            </motion.div> */}
//test for layout
const LittleTest = () => {
    const [activeEle,setActiveEle] = useState('');

    let links = ['Portfolio', 'About Me'];
    const classIWant = { rotate: -90 };
    const styleIWant = 'w-[250px]'
    return (
        <>
            <div className="container">
                <div className="rotated-text">Rotate me!</div>
            </div>
            <div className="w-[600px] h-[400px] border-8 mt-12 ml-32 relative box-border">
                <div className="grid grid-cols-10 h-full">
                    <div className="border border-red-600  col-span-9 h-fit">tests</div>
                    <div className="border border-red-600 row-span-2 h-full flex flex-col h-[100%] w-auto items-center justify-around">
                        {links.map((ele) => {
                            return (
                                <motion.div id={ele} key={ele}
                                className="border flex align-center justify-start"
                                animate={
                                    {
                                        width: activeEle === ele ? "100px": "",
                                        backgroundColor: activeEle === ele ? 'red':'transparent',
                                        padding: activeEle === ele ? "16px": ""
                                    }
                                }
                                >
                                    <motion.a className="cursor-pointer rotated-text border"
                                        onClick={()=>{setActiveEle(()=>(activeEle === ele ? '' : ele))}}
                                        animate={activeEle === ele ? {rotate:-90} : {rotate:0}}
                                    >{ele}
                                    </motion.a>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

//<a className="rotated-text cursor-pointer">test</a>
export default LittleTest;