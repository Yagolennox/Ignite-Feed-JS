import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css' 
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) { 
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)  
  } 

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Yagolennox.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yago Santos</strong> 
              <time title='05 de janeiro às 15:32' dateTime='2024-01-05 15:18'>Cerca de 1 hora atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} /> 
            </button>
          </header>

          <p>{content}</p>
        </div>

        <div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp /> 
              Aplaudir <span>{likeCount}</span> 
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}