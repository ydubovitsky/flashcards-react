import styles from './screenshots.module.css';
import phone from '../gallery/images/slide1.png';
import Fade from 'react-reveal/Fade';

const Screenshots = () => {
  return (
    <div className={styles.container}>
      <Fade cascade bottom>
        <div className={styles.header}>
          <h1>Скриншоты</h1>
          <div className={styles.line} />
          <p>Красивый и современный дизайн</p>
          <div className={styles.line} />
        </div>
        <div className={styles.slides}>
          <img src={phone} alt="" srcset="" />
          <img src={phone} alt="" srcset="" />
        </div>
      </Fade>
    </div>
  )
}

export default Screenshots;
