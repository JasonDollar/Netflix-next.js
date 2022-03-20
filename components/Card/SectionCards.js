import React from 'react'
import styles from './SectionCards.module.scss'
import Card from './Card'

const SectionCards = ({ title }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/static/clifford.webp" size="large" id={0}/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
        <Card imgUrl="/static/clifford.webp" size="large"/>
      </div>
    </section>
  )
}

export default SectionCards