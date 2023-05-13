// Write your code here

import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {CommentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = CommentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const textLiked = isLiked ? 'button liked' : 'button'
  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-items-container">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-container">
            <p className="username">{name}</p>
            <p className="time">{postTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="liked-button">
          <img src={likedImgUrl} alt="like" className="like" />
          <button type="button" className={textLiked} onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="hr-commentLine" />
    </li>
  )
}

export default CommentItem
