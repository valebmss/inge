import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Header from './components/Header'
import Banner from './components/Banner'

export default function Home() {
  return (
    <div>
      <header>
      <title>Casas en Tocancipá</title>
    </header>
    <Header/>
    <Banner/>
    </div>
  )
}
