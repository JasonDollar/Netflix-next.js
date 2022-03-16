import Image from "next/image"
import styles from './Navbar.module.scss'

const Navbar = ({ username }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href="#" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image 
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128px"
                height="34px" />
          </div>
        </a>
    
        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem2}>My list</li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
              {/* TODO Expand more icon */}
            </button>

            <div className={styles.navDropdown}>
              <div>
                <a href="#" className={styles.linkName}>Sign out</a>
                <div className={styles.lineWrapper}></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar