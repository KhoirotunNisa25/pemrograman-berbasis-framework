import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/layout/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Praktikum Next.js Page Router</title>
      </head>
      <div>
        <h1>Praktikum Pemrograman Framework</h1>
        <p>Jobsheet 7</p>
      </div>
      <div>
        <nav>
          <ul>
            <li><a href="/about">Tentang Saya</a></li>
          </ul>
        </nav>
      </div>
    </div>
    // test
  )
}


