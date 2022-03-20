import React from 'react'
import styles from './SectionCards.module.scss'
import Card from './Card'

const SectionCards = ({ title, videos, size }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((item, index) => (
          <Card key={index} id={index} imgUrl={item.imgUrl} size={size}/>
        ))}
      </div>
    </section>
  )
}

export default SectionCards