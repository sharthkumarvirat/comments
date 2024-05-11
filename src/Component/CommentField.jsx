import React from 'react'

export default function CommentField({ newComment, setNewComment, saveComment }) {
    return (
        <>
            <div className='flex tems-center justify-evenly gap-1.5 m-3'>
                <div className='flex items-center justify-center'>
                    <img width={25} src="src/assets/Rectangle 911.png" alt="" />
                    <input type="text" placeholder='Write Comment' value={newComment} onChange={(e) => { setNewComment(e.target.value) }} className='py-4 pr-10 pl-4 w-60 min-h-8 border border-grey rounded-3xl' />
                    <img src="src/assets/send.png" alt="" className='ml-[-2rem] h-4 pr-2' onClick={saveComment} />
                </div>
            </div>
        </>
    )
}
