import React from 'react'

export default function Note() {
    return (
        <>
            {/* ...............................part3 */}
            <div className='flex items-center justify-evenly m-4 gap-3'>
                <img src="src/assets/note-sticky.png" alt="" />
                <h1 className='italic font-medium text-sm text-gray-500' >Note:</h1>
                <div className='w-64 min-h-11 px-4 border border-grey rounded-2xl' >
                    <p className='font-normal text-sm text-gray-500'>09382049832  www.flowervendor.com</p>
                </div>
            </div>

            <div className='w-72 border border-grey mb-3'></div>
        </>
    )
}
