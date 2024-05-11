import React from 'react'

export default function Top() {
    return (
        <>
            <div className='flex items-center justify-between'>
                <img width={16} height={16} src="src/assets/circle-check.png" alt="" />
                <div className='flex items-center gap-2'>
                    <img width={11} height={12} src="src/assets/trash-can.png" alt="" />
                    <img width={11} height={12} src="src/assets/close.png" alt="" />
                </div>
            </div>

            <div className='m-4'>
                <div className=' flex items-center justify-center w-64 border-2 border-grey rounded-3xl px-3 py-2.5'>
                    <h1 className='text-xl font-bold leading-6 text-rose-500'>Flower Arrangement<span className='text-black'>|</span></h1>
                </div>
                <div className='w-64 min-h-11 border-2 border-grey rounded-3xl flex items-center justify-evenly mt-2'>
                    <div><img src="src/assets/calendar.png" alt="" /></div>
                    <div>
                        <h1 className='text-sm font-semibold leading-4' >Dec 5, 2024 at 8:00-10:00 AM</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
