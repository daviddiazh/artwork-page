import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import fb from '../../../assets/fb.svg'
import ig from '../../../assets/ig.svg'
import sign from '../../../assets/sign.svg'

export const Footer = () => {
  return (
    <div className={styles.container}>
        <div style={{ display: 'flex', gap: 15 }}>
            <Image
                src={fb}
                alt='Facebook icon'
                width={25}
            />
            <Image
                src={ig}
                alt='Instagram icon'
                width={25}
            />
        </div>
        <Image
            src={sign}
            alt='Firma de Beatriz'
            width={130}
        />
    </div>
  )
}
