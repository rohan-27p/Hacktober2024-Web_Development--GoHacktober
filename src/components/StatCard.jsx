import React from 'react'

export default function StatCard({title, value, icon}) {
  return (
  <div className="flex flex-col gap-4 bg-white bg-opacity-10  rounded-lg p-5 shadow-md ">
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm sm:text-base font-semibold">
        {title}
      </div>
      <img src={icon} alt='image' />
    </div>
    <div className="text-2xl sm:text-3xl text-left font-bold">
      {value}
    </div>
  </div>
  )
}
