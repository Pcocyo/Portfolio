import React from 'react';
import IconNav from './component/IconNav/IconNav';
import ContextProvider from './ContextProvider';
import TextNav from './component/TextNav/TextNav';

const bodyStyle:string = 'h-[fit] bg-[#040B15] text-[#f5f5f5]'

const App:React.FC = ()=>{
  return (
    <div 
    className={bodyStyle}
    >
      <ContextProvider>
        <IconNav/>
        <div className="h-[1200px] border border-green-500 static">
          <TextNav/>
          <div className="">test</div>
          <div className="">test</div>
        </div>
      </ContextProvider>
    </div>
  )
}

export default App
