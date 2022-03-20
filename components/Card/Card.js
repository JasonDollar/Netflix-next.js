import { useState } from 'react'
import Image from "next/image"
import styles from './Card.module.scss'

const Card = ({ imgUrl, size = "medium" }) => {
  const [imgSrc, setImgSrc] = useState(imgUrl)

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  }

  const handleOnError = (error) => {
    // defaulut image
    setImgSrc('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80')
  }

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image 
          src={imgSrc}
          alt="Movie image"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />

      </div>
    </div>
  )
}

export default Card