import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import pic from '../../assets/pic.jpeg'

export default function About () {
  return (
    <div className={styles.container}>
      <Image
        src={pic}
        alt='Beatriz'
        width={400}
        height={550}
        className={styles.image}
      />
      <div>
        <p className={styles.name}>Beatriz Apellido</p>
        <p className={styles.role}>Artista Colombiana</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis blanditiis consectetur in voluptatem veritatis, illo ducimus numquam doloribus, corrupti vero quod eos. Fugiat amet, reprehenderit sequi maiores sed culpa recusandae.
        Dolores nobis consequatur, labore sed voluptatem, libero facere placeat deserunt at ipsa aliquid! Esse, distinctio. Hic fuga, saepe inventore exercitationem odit voluptatum minima. Debitis hic nemo animi asperiores quibusdam impedit?
        Facilis cumque velit maiores dignissimos soluta ratione, obcaecati unde quasi nostrum totam impedit sequi, nihil commodi provident et incidunt eum veniam repellat delectus nisi illo. Blanditiis cumque architecto officia sed?
        Libero minus veritatis magnam labore excepturi expedita unde cumque! Porro tempore quo et eligendi qui dignissimos optio est, at dolorum voluptates! Blanditiis, similique laudantium? Maxime reprehenderit aliquid sequi exercitationem consequuntur?
        Illum eaque obcaecati voluptatum cupiditate soluta consequatur nisi incidunt delectus deleniti impedit alias eligendi sapiente, nostrum architecto. Dolore similique sit aspernatur vero corrupti, necessitatibus amet dignissimos ut labore beatae sint.</p>
      </div>
    </div>
  )
}
