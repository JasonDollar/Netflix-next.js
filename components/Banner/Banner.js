import Image from 'next/image'
import styles from './Banner.module.scss'

const Banner = ({ title, subtitle, imgUrl }) => {
  const handleOnPlay = () => {

  }
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subtitle}>{subtitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
            <span className="material-icons">
              <Image src="/static/play_arrow.svg" alt="Play icon" width="32px" height="32px" />
            </span>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>

      </div>
      <div 
        className={styles.bannerImg}
        style={{ 
          backgroundImage: `url(${imgUrl})`, 
          // height: '100%', 
          // width: '100%', 
          // position: 'absolute', 
          // backgroundSize: 'cover', 
          // backgroundPosition: '50% 50%' 
        }}
      >
        {/* <img src={imgUrl} alt="Clifford" /> */}
      </div>
    </div>
  )
}

export default Banner