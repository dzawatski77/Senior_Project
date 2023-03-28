//import React from 'react'
import { Header } from '../components';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import TimePicker from 'react-time-picker';
import { Link } from "react-router-dom";
import Event from "../components/Event";




const CreateEvent = () => {
    
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 dark:text-gray-200 dark:bg-main-dark-bg bg-white rounded-3xl'>
      <Header category="Page" title="Create Event" />
      <main className='mt-8 max-w-md'>
        <form className='grid grid-cols-1 gap-6'>
          <label class="eventName">
            <span class="text-gray-700">Event Name:</span>
            <input type="text" class="
              p-2
              mt-1 
              block 
              w-full 
              rounded-md
             bg-gray-200
             border-gray-300
             focus:border-gray-500 focus:bg-white focus:ring-0
              " placeholder></input>
          </label>

          <label class="eventDate">
            <span class="text-gray-700">When is your Event?</span>
            <input type="date" class="
              p-2
              mt-1
              block
              w-full
              rounded-md
              bg-gray-200
              border-gray-300
              focus:border-gray-500 focus:bg-white focus:ring-0
              " placeholder="mm/dd/yyyy"></input>
          </label>

          <label class="eventStartTime">
            <span class="text-gray-700">What time does your event Start?</span>
            <input type="time" class="
              p-2
              mt-1
              block
              w-full
              rounded-md
              bg-gray-200
              border-gray-300
              focus:border-gray-500 focus:bg-white focus:ring-0
              " placeholder=''></input>
          </label>

          <label class="eventEndTime">
            <span class="text-gray-700">What time does your event end?</span>
            <input type="time" class="
              p-2
              mt-1
              block
              w-full
              rounded-md
              bg-gray-200
              border-gray-300
              focus:border-gray-500 focus:bg-white focus:ring-0
              " placeholder='Event Name'></input>
          </label>

          <label class="eventName">
            <span class="text-gray-700">Where will your event be held?</span>
            <input type="text" class="
              p-2
              mt-1
              block
              w-full
              rounded-md
              bg-gray-200
              border-gray-300
              focus:border-gray-500 focus:bg-white focus:ring-0
              " placeholder='Location'></input>
          </label>

          <label class="eventrepeat">
            <span class="text-gray-700">Does your event repeat?</span>
            <select class="
              p-2
              mt-1
              block
              w-full
              rounded-md
              bg-gray-200
              border-gray-300
              focus:border-gray-500 focus:bg-white focus:ring-0
              " placeholder='Location'>
                <option></option>
                <option>No</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
          </label>
          
          <label class="eventdetails">
            <span class="text-gray-700">Additional Details(For you only):</span>
            <textarea class="
              
              mt-1
              block
              w-full
              rounded-md
              bg-gray-200
              border-gray-300
              focus:border-gray-500 focus:bg-white focus:ring-0
              " rows="5" spellcheck="true"></textarea>
          </label>

          


        </form>
      </main>


      </div>
  )
}

export default CreateEvent