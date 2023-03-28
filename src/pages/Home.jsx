import React from 'react'
import { Header, Footer } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '../components';
import { ordersData, earningData } from '../data/dummy';
//import { ListViewComponent, ListView, Inject, Virtualization } from '@syncfusion/ej2-react-lists';



const Home = () => {
  const { currentColor } = useStateContext();
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 drop-shadow-2xl dark:text-gray-200 dark:bg-main-dark-bg bg-white rounded-3xl'>
      <Header category="Home" title="Event Pro" />
      <div className='flex justify-between items-center'>
        <div>
          <p className='font-bold dark:text-gray-200 text-2xl'>Welcome back!</p>
          <p className='dark:text-gray-200 text-lg'>Check out today's featured events.</p>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-2 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white
               dark:text-gray-200
               dark:bg-secondary-dark-bg
               md:w-56 p-4 pt-4 rounded-2xl drop-shadow-lg min-h-max min-w-max">
                <button type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-.09 rounded-full p-3 hover:drop-shadow-xl">
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                </p>
                <p>
                  <span className={`text-sm ml-1`}>
                    Location:  {item.percentage}
                  </span>
                </p>
                <p>
                  <span className={`text-sm ml-1`}>
                    Starts at:  {item.title}
                  </span>
                  
                </p>
            </div>
          ))}
        </div>
        <div class='col-lg-4 col-md-4 col-sm-4 list-display' style='padding-right: 0px;'>



        </div>
      </div>  
      </div>
    
  )
}

export default Home
