'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { artWorks } from "@/mocks/artworks";
import { ArtWork } from "./interfaces/artwork";
import Image from "next/image";

export default function Home() {

  const [ opt, setOpt ] = useState(0);
  const [ data, setData ] = useState<ArtWork[]>([]);

  useEffect(() => {
    if (opt === 0) setData(artWorks)
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
              <div key={item?._id} className={styles.imageContainer}>
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}
