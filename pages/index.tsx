import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div  className={styles.container}>
      <Head>
        <title>Recipe Book</title>
      </Head>
        <h1>Recipes</h1>
    </div>
  )
}
