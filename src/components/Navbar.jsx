import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line} from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'
import { Chat, Notification } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import LogoutButton from './LogoutButton';

const NavButton = ({ title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={() => customFunc()} style={{ color}}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span syle={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right- top-2"/>
          {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, 
    screenSize, setScreenSize, currentColor } = useStateContext();

    useEffect(() => {
      const handleResize = () => setScreenSize (window.innerWidth);

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener
      ('resize', handleResize);
    }, [setScreenSize])

    useEffect(() => {
      if(screenSize <= 900) {
        setActiveMenu(false)
      } else {
        setActiveMenu(true);
      }
    }, [screenSize, setActiveMenu]);

    

  return (
    <div className= "flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton title="Menu" customFunc={() =>
      setActiveMenu((prevActiveMenu) =>
      !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />
    
        <div className="flex">
          <NavButton 
            title="Chat"
            dotColor="#03C9D7" 
            customFunc={() => handleClick('Chat')}
            color={currentColor} 
            icon={<BsChatLeft />} 
          />
          <NavButton 
            title="Notification" 
            dotColor="#03C9D7"
            customFunc={() => handleClick('Notification')}
            color={currentColor} 
            icon={<RiNotification3Line />} 
          />
          <TooltipComponent 
          content="Profile"
          position='BottomCenter'
          >
            <div className=" flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick
            ('userProfile')}>
              <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
              />
              <p>
                <span className="text-gray-400 text-14">Hi, </span> {' '}
                <span className="text-gray-400 font-bold ml-1 text-14">Damien</span>
              </p>
              <MdKeyboardArrowDown 
              className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
          <LogoutButton
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          drop-shadow="md"
          className="popup-button w-100%"
          //onClick={() => callPort('papameter_value')}
          type="Logout"/>
          {isClicked.chat && <Chat />}
          {isClicked.Notification && <Notification />}
          {isClicked.userProfile && < userProfile />}

        </div>
    </div>

  )
}
// hello//
export default Navbar
