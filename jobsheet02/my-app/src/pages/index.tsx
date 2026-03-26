import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div>
        <h1>Praktikum NEXT.js page Router</h1> <br/>
        <p>Praktikum Pemrograman Framework</p>
        <p>Jobsheet 2</p>
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


