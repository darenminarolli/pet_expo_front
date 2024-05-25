import React from 'react'
import SecondaryButton from './SecondaryButton'

const SecondaryCard = () => {
  return (
    <div className='w-full rounded-md flex flex-wrap md:flex-nowrap h-fit justify-between bg-slate-950 shadow-lg text-slate-50 hover:scale-y-[1.02] hover:scale-x-[1.01]  transition duration-200 '>
        <div className='flex flex-wrap md:w-3/4'>

        <img className='rounded-t-md md:rounded-l-md w-full md:w-[300px]  '  src="https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg" alt="" />
     <div className='flex flex-col justify-around p-4'>
     <h1 className='secondary-header'>Name:Pooh</h1>
     <h1 className='secondary-header'>Location: Tirana, Albania</h1>
     </div>
        </div>
        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center items-center gap-4'>
        <SecondaryButton
              onClick={() => {}}
              className="w-full md:w-3/4 bg-cyan-700 text-slate-50"
            >
              Edit 🛠️
            </SecondaryButton>
        <SecondaryButton
              onClick={() => {}}
              className="w-full md:w-3/4 bg-red-700 text-slate-50"
            >
              Delete 🗑️
            </SecondaryButton>

        </div>
    </div>
  )
}

export default SecondaryCard
