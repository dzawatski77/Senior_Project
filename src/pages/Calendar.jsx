import React from 'react'
import { ScheduleComponent, Day, Week, Month, Agenda, Inject,Resize, DragAndDrop, WorkWeek } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';



const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 drop-shadow-2xl dark:text-gray-200 dark:bg-main-dark-bg bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <p className=' pl-2 text-sm dark:text-gray-200'>(Drag and drop items and double click to edit)</p>
      <ScheduleComponent className='drop-shadow-md' hieght="80%" width="100%" eventSettings={{dataSource: scheduleData }} >
        <Inject services={[ Day, Week, Month, Agenda, Resize, DragAndDrop, WorkWeek]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar

