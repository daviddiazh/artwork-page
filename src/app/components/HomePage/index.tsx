'use client'

import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArtWork } from "../../interfaces/artwork";

export const Home = ({ artWorks }: { artWorks: ArtWork[] }) => {

  const [ opt, setOpt ] = useState(0);
  const [ data, setData ] = useState<ArtWork[]>([]);

  useEffect(() => {
    if (opt === 0) setData(artWorks)
    if (opt === 1) setData(artWorks.filter(d => d.category === 'Abstract'))
    if (opt === 2) setData(artWorks.filter(d => d.category === 'Landscape'))
    if (opt === 3) setData(artWorks.filter(d => d.category === 'Portrait'))
  }, [opt])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.firstContainer}>
          <p 
            className={`
              ${styles.firstContainerText} 
              ${opt === 0 ? styles.active : ''}
            `}
            onClick={() => setOpt(0)}
          >
            Todos
          </p>
          <p 
            className={`
              ${styles.firstContainerText} 
              ${opt === 1 ? styles.active : ''}
            `}
            onClick={() => setOpt(1)}
          >
            Abstracto
          </p>
          <p
            className={`
              ${styles.firstContainerText} 
              ${opt === 2 ? styles.active : ''}
            `}
            onClick={() => setOpt(2)}
          >
            Paisajes
          </p>
          <p
            className={`
              ${styles.firstContainerText} 
              ${opt === 3 ? styles.active : ''}
            `}
            onClick={() => setOpt(3)}
          >
            Retratos
          </p>
        </div>

        <div className={styles.secondContainer}>
          {
            data?.map((item) => (
              <Link key={item?._id} className={styles.imageContainer} href={`/detail/${item?._id}`}>
                <div className={styles.image}>
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    width={200}
                    height={200}
                    style={{ width: '100%', height: '100%' }}
                  />
                  {
                    item?.state === 'Sold' && <p className={styles.soldText}>Vendido</p>
                  }
                </div>
              </Link>
            ))
          }
        </div>
      </main>
    </div>
  )
}
