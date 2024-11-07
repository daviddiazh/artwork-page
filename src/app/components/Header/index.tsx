'use client'

import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import menu from '../../../assets/menu.svg'

export const Header = () => {

  const pathname = usePathname()

  return (
    <div className={styles.container}>
        <Link href='/'>
            <h1>BEATRIZ&rsquo;S <span>ART</span></h1>
        </Link>

        <div className={styles.linksContainer}>
            <Link href='/' className={ pathname === '/' ? styles.active : '' }>
                <p>Inicio</p>
            </Link>
            <Link href='/about' className={ pathname === '/about' ? styles.active : '' }>
                <p>Biografía</p>
            </Link>
            <Link href='/contact' className={ pathname === '/contact' ? styles.active : '' }>
                <p>Contact</p>
            </Link>
        </div>

        <Image
            src={menu}
            alt='Menu icon'
            width={20}
            className={styles.menu}
        />
    </div>
  )
}
