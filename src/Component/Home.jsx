import React, { useState } from 'react'
import Comments from "./Comments";
import Top from './Top';
import Note from './Note';
import NameDropdown from './NameDropdown';
import CommentField from './CommentField';

const names = ['Jane Smith', 'Sam', 'John', 'Adam', 'Rock']

export default function Home() {

    const [comments, setComments] = useState([
        {
            id: 1,
            name: "Jane Smith",
            comment: "Thanks for assigning me on the task. We’ll get the details ironed out"
        },
        {
            id: 2,
            name: "Smith",
            comment: "Thanks for assigning me on the task.We’ll get the details ironed out"
        },
    ]);

    const [editable, setEditable] = useState('');
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState(names[0]);

    const onSave = (commentId, editedComment) => {
        setComments(prevComments =>
            prevComments.map(comment => {
                if (comment.id === commentId) {
                    return { ...comment, comment: editedComment };
                }
                return comment;
            })
        );
        setEditable("0");
        console.log("Saved");
    };

    const saveComment = () => {
        if (newComment.trim() !== '') {
            const newId = new Date().getUTCMilliseconds();
            const newComments = [...comments, { id: newId, name: userName, comment: newComment }];
            setComments(newComments);
        }
    };

    const deleteComment = (commentId) => {
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        setComments(updatedComments);
    };

    return (
        <div className='flex items-center justify-center p-4 h-screen'>
            <div className='w-80 h-fit border-solid  border-2 border-grey rounded-2xl p-4 shadow-lg'>

                <Top />

                <NameDropdown names={names} setUserName={setUserName} />

                <Note />

                <div>
                    <h1 className='italic text-sm font-bold text-gray-500'>Comments :</h1>
                </div>

                {
                    comments.map((element) => {
                        return (
                            <Comments
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                comment={element.comment}
                                editable={editable}
                                setEditable={setEditable}
                                onSave={onSave}
                                deleteComment={deleteComment}
                            />
                        )
                    })
                }

                <CommentField newComment={newComment} setNewComment={setNewComment} saveComment={saveComment} />

            </div>
        </div>
    )
} 
