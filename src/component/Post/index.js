import './index.css'
import Images from '../Images/index'
import Buttons from '../Buttons/Buttons'
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react'
import Comment from './Comment'

function format12Hours(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var currTime = hours + ':' + minutes + ' ' + ampm;
    return currTime;
}

const postData = {
    createdBy: "Muhammad Madani Raza",
    description: 'BAQARAH EID PREPARATION :D',
    avatar: 'https://pbs.twimg.com/profile_images/1254351353184432129/cazwsU2d_400x400.jpg',
    images: ['something.com/abc.jpg', 'something.com/xyz.jpg'],
    createdAt: format12Hours(new Date),
    createOn: new Date().toLocaleDateString()
}


function Post(props) {
    const [comment, setComment] = useState([])
    const [initialComment, setInitialComment] = useState('')
    
    const comments = () => {
        let tempCom = [...comment]
        tempCom.push(initialComment)
        setComment(tempCom)
        setInitialComment('')
    }

    const deleteItem = (index) =>{
        let tempCom = [...comment]
        tempCom.splice(index, 1)
        setComment(tempCom)
    }
    
    return (
        <div className='postBody' >
            <div className='imgDetail' >
                <img className="avatar" src={postData.avatar} />
                <span className='name' > {postData.createdBy} </span> <span > created on {postData.createOn}
                    at {postData.createdAt} </span>
            </div>
            <div className='description' > {postData.description}
            </div>
            <div>
                <Images />
            </div>
            <div className='btnDiv'>
                <Buttons
                    label='Like'
                />
                <Buttons
                    label='Comment'
                />
                <Buttons
                    label='Share'
                />
            </div>
            {comment.length > 0 ?
                <div>
                    {comment.map((allComments, index) => {
                        return (
                         <Comment
                            allComments = {allComments}
                            index = {index}
                            deleteItem = {deleteItem}
                         />   
                        )
                    })}
                </div> : <></>}
            <div className='inputDiv'>
                <input placeholder='Write a comment...' value={initialComment} onChange={e => {
                    setInitialComment(e.target.value
                    )
                }} /><SendIcon className='icon' onClick={comments}></SendIcon>
            </div>
        </div>
    )
}

export default Post;