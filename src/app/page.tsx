'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [ opt, setOpt ] = useState(0);

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
            Abstracto
          </p>
          <p
            className={`
              ${styles.firstContainerText} 
              ${opt === 1 ? styles.active : ''}
            `}
            onClick={() => setOpt(1)}
          >
            Paisajes
          </p>
          <p
            className={`
              ${styles.firstContainerText} 
              ${opt === 2 ? styles.active : ''}
            `}
            onClick={() => setOpt(2)}
          >
            Retratos
          </p>
        </div>

        <div className={styles.secondContainer}>
          <p>Hello World</p>
        </div>
      </main>
    </div>
  );
}
