import React, { useState } from 'react'
import './VideoSideBar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';

function VideoSideBar({likes, shares, messages}) {
  const [liked, setliked] = useState(false);
  return (
    <div className='videoSideBar'>
      <div className='videoSideBar_button'> 
        { liked ? (
          <FavoriteIcon fontSize="large"
          onClick={(e)=> setliked(false)}
          />
        ) : (
            <FavoriteBorderIcon
              fontSize='large'
              onClick={(e) => setliked(true)}
            />
        )
      }
        <p>{liked ? likes+1 : likes }</p>
      </div>
      <div className='videoSideBar_button'> 
        <MessageIcon fontSize='large' />
        <p>{messages}</p>
      </div>
      <div className='videoSideBar_button'> 
        <SendIcon fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSideBar
 