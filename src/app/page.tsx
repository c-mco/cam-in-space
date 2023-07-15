import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Cam in Space!
      </h1>

      <p className={styles.description}>
        This is Cam... in SPACE!
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
        <Image
            src="https://res.cloudinary.com/dn0qocubm/image/upload/w_1920/cam-in-space/cam_in_space_n5ufim.jpg"
            alt="Cam in Space"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </main>
  )
}