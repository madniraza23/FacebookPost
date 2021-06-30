import React , {useState} from 'react'

const Comment = (props) => {
    const {allComments, index, deleteItem} = props
    const [editMode, setEditMode] = useState(false)
    const [currComment, setCurrComment] = useState(allComments)
    const commentData = {
        commentBy: 'Muhammad Madani Raza',
        avatar: 'https://pbs.twimg.com/profile_images/1254351353184432129/cazwsU2d_400x400.jpg',
    }

    const editItem = index =>{
        setEditMode(true)
    }
    const updateItem = ()=> setEditMode(false)
    return (
        <div className='comments'>
            <img className='comments_avatar' src={commentData.avatar} />
            {editMode ? <input className='comment' value={currComment} onChange={e=>{setCurrComment(e.target.value)}}/>:<p className='comment'>{currComment}</p>}
            {editMode ? <button className='commentButton' onClick={updateItem}>Done</button> : <button className='commentButton' onClick={()=>editItem(index)}>Edit</button>}
            <button className='commentButton' onClick={()=>deleteItem(index)}>Delete</button>
        </div>
    )
}

export default Comment
