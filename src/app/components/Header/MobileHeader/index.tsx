'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import darkMenu from '../../../../assets/dark-menu.svg'
import lightMenu from '../../../../assets/light-menu.svg'

export const MobileHeader = () => {

  const [ open, setOpen ] = useState(false);

  return (
    <div>
        <div 
            className={styles.container}
            style={{
                backgroundColor: open ? '#000' : '#fff'
            }}
        >
            <Link href='/'>
                <h1
                    style={{
                        color: open ? '#fff' : '#000'
                    }}
                >BEATRIZ&rsquo;S <span>ART</span></h1>
            </Link>

            {
                open ? (
                    <Image
                        src={lightMenu}
                        alt='Menu icon'
                        width={20}
                        className={styles.menu}
                        onClick={() => setOpen(false)}
                    />
                ) : (
                    <Image
                        src={darkMenu}
                        alt='Menu icon'
                        width={20}
                        className={styles.menu}
                        onClick={() => setOpen(true)}
                    />
                )
            }
        </div>
        {
            open && (
                <div className={`${styles.linksContainer} ${open ? styles.show : styles.hide}`}>
                    <Link href='/' onClick={() => setOpen(false)}>
                        <p className={styles.opt}>Inicio</p>
                    </Link>
                    <Link href='/about' onClick={() => setOpen(false)}>
                        <p className={styles.opt}>Biografía</p>
                    </Link>
                    <Link href='/contact' onClick={() => setOpen(false)}>
                        <p className={styles.opt}>Contact</p>
                    </Link>
                </div>
            )
        }
    </div>
  )
}
