import React from 'react'
import { Header, Footer } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

// any blue needs to be changed to currentColor //

const Home = () => {
  const { currentColor } = useStateContext();
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10  dark:text-gray-200 dark:bg-main-dark-bg bg-white rounded-3xl'>
      <Header category="Home" title="Event Pro" />
    

    
      
    </div>
    
  )
}

export default Home
