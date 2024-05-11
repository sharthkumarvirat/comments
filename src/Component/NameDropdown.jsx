import React from 'react'

export default function NameDropdown({ names, setUserName }) {
    return (
        <>
            <div className='flex items-center justify-evenly' >
                <div>
                    <img src="src/assets/user.png" alt="" />
                </div>
                <h1 className='italic font-medium text-sm text-gray-500'>Assign to :</h1>
                <div>
                    <div className='w-40 p-2 border border-grey rounded-3xl'>
                        <div className='flex items-center justify-evenly'>
                            <img src="src/assets/Rectangle 911.png" alt="" />
                            <select name="username" className='text-green-700 font-semibold text-sm bg-white' onChange={(e) => setUserName(e.target.value)} >
                                {
                                    names.map((name) => {
                                        return (
                                            <option key={name} value={name}>{name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
