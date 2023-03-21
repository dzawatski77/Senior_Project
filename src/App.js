import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
//import { TooltipComponent } from '@syncfunsion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home, EventHistory, Calendar, CreateEvent, Attendees, ToDoList, FindEvents, SwitchMode, Pie} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();
    
  return (
    <div>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                     <button type="button"
                     className="text-3xl p-3 
                     hover:drop-shaow-xl
                     hover:bg-light-gray text-white"
                     style={{ background: 'blue', borderRadius: '50%'  }}>
                         <FiSettings />
                    </button>
                </div>

                {/* Left Side Sidebar pop out*/}
                {activeMenu ? (
                    <div className="w-72 fixed sidebar
                    dark:bg-secondary-dark-bg
                    bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 
                    bg-secondary-dar-bg
                    bg-white">
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-bg navbar w-full">
                        <Navbar />
                    </div>    
                </div>
                <div>
                    <Routes>
                        {/* Dashboard Home */}
                        <Route path="/" element={<Home/>} />
                        <Route path="/Home" element={<Home/>} />

                        {/* Pages */}
                        <Route path="/Event History" element={<EventHistory />} />
                        <Route path="/Create Event" element={<CreateEvent />} />
                        <Route path="/Attendees" element={<Attendees />} />

                        {/* apps */}
                        <Route path="/Calendar" element={<Calendar />} />
                        <Route path="/ToDoList" element={<ToDoList />} />
                        <Route path="/Find Events" element={<FindEvents />} />
                        
                        {/* switch mode */}
                        <Route path="/Switch Mode" element={<SwitchMode />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App
             

