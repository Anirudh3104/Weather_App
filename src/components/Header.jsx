import React from 'react'

const Header = () => {
  return (
    <div>
       <div className='flex flex-row items-center justify-center  text-white'>
          <div className='flex items-center justify-center pt-10 pb-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud w-12 h-12 text-white mr-4"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
            <h1 className='text-5xl font-bold'>WeatherScope</h1>
          </div>
        </div>
      <div className='flex flex-col flex-row items-center justify-center text-white text-xl'>
          <h2>Get detailed weather information for any location worldwide</h2>
      </div>
    </div>
  )
}

export default Header
