import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <div>
            <h1>Tentang Saya</h1> <br/>
            <p><strong>Nama:</strong> Khoirotun Nisa</p>
            <p><strong>NIM:</strong> 2341720057</p>
            <p><strong>Prodi:</strong> D4 Teknik Informatika</p>
            <p><strong>Alamat:</strong> Jl Satria Barat</p>
        </div>

        <div>
            <nav>
                <ul>
                    <li><a href="/">Kembali</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}


