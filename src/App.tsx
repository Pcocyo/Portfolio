import React from 'react';
import IconNav from './component/IconNav/IconNav';
import ContextProvider from './ContextProvider';
import TextNav from './component/TextNav/TextNav';
import AboutPage from './component/AboutPage/AboutPage';
const bodyStyle: string = 'h-[fit] bg-[#040B15] text-[#f5f5f5] w-[100%]'

const App: React.FC = () => {
  return (
    <div
      className={bodyStyle}
    >
      <ContextProvider>
        <IconNav className="h-[50px] flex items-center p-[14px] justify-between overflow-hidden sticky top-0 bg-[#02060C] z-[1]"/>
        <main className="h-[fit] static overflow-auto z-[0]">
          <section>
            <AboutPage className="h-[70vh] lg:h-fit"/>
            <div className="h-[100vh]" id="Project">
               Project
            </div>
          </section>
          <aside>
            <TextNav className='hidden md:h-[60vh] md:w-[50px] md:fixed md:top-[25%] md:right-0 md:flex md:flex-col md:justify-around md:items-end md:mr-[14px]' />
          </aside>
        </main>
      </ContextProvider>
    </div>
  )
}

export default App
