import React, { useState } from 'react'

export default function Comments({ id, name, comment, editable, setEditable, onSave, deleteComment }) {
    const [editedComment, setEditedComment] = useState(comment);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        onSave(id, editedComment);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setEditable(id);
    }

    const handleCancel = () => {
        setIsEditing(false)
        setEditable('0');
    }

    return (
        <>
            <div className='flex tems-center justify-evenly gap-2 m-3' >
                <div>
                    <img width={38} src="src/assets/Rectangle 911.png" alt="" />
                </div>

                <div className='cursor-default'>
                    <h2 className='font-semibold text-sm text-green-700 '>{name}</h2>
                    {isEditing ? (
                        <p className='font-normal text-xs border-2 border-black' contentEditable={isEditing} onChange={(e) => { setEditedComment(e.target.innerText) }}>{editedComment}</p>
                    ) : (
                        <p className='font-normal text-xs' onClick={() => setEditable(id)}>{comment}</p>
                    )}
                </div>


                {editable === id ? (
                    <>
                        <div onClick={handleSave} className='cursor-pointer p-2'>
                            <img width={20} src="src/assets/save-16.png" alt="" />
                        </div>
                        <div onClick={handleCancel} className='cursor-pointer p-2'>
                            <img width={20} src="src/assets/cancel-16.png" alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='cursor-pointer p-2' onClick={() => { deleteComment(id) }} >
                            <img width={20} src="src/assets/trash-can.png" alt="" />
                        </div>
                        <div onClick={handleEdit} className='cursor-pointer p-2'>
                            <img width={20} src="src/assets/edit-2-16.png" alt="" />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
