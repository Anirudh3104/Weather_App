import React from 'react'

const beforeSearch = () => {
  return (
    <div className="flex-1 flex items-center justify-center mt-8">

      <div className='flex flex-col items-center justify-center text-white text-center px-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud w-12 h-12 text-white mr-4"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
        <h1 className=' font-semibold text-2xl'>Welcome to WeatherScope</h1>
        <p className='max-w-md'>Search for any city or country to get detailed weather
          information including current conditions, sunrise/sunset
          times, and hourly forecasts.</p>
      </div>
    </div>
  )
}

export default beforeSearch
