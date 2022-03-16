import classes from './Banner.module.scss'

const Banner = ({ title, subtitle, imgUrl }) => {
  return (
    <div>
      <img src={imgUrl} alt="Clifford" />
    </div>
  )
}

export default Banner