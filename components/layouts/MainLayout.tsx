// race + tab

//primero react, despues next y luego componentes
import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

// puedo exportar por defecto pk estoy en directorio layouts
// children pk es un higher order component, recibe jsx hijos
export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Francesc</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}

      </main>

    </div>
  )
}

export default MainLayout