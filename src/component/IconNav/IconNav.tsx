import React, {useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon2 from "../../assets/Icon2.svg";
import { animationVariant } from "./variants";
import { useNavigationContext } from "../TextNav";

const IconNav: React.FC = () => {
  const {navigationContext} = useNavigationContext()
  const [navState,setNavState]= useState(navigationContext)
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
      setAnimateKey((prevKey) => prevKey + 1);
      const timer = setTimeout((()=>{
        setNavState(navigationContext)
      }),255)
      return ()=> clearTimeout(timer)
  }, [navigationContext]);

  return (
    <nav className="h-[50px] flex items-center p-[14px] justify-between overflow-hidden sticky top-0">
      <motion.img
        src={Icon2}
        alt="Icon"
        className="h-[49px] cursor-pointer"
        whileHover={{ scale: 1.2 }}
      />
      <motion.h3
        key={animateKey}
        className="text-[28px] text-[#FF2B51] cursor-pointer"
        variants={animationVariant} // Animation variants with "fadeOnChange"
        animate="animation"
        whileHover="whileHover"
      >
        {navState}
      </motion.h3>
    </nav>
  );
};

export default IconNav;