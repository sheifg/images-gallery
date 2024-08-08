import React from 'react';
import styles from "./Main.module.css";

export default function Card({item}) {
  return (
    <div className={styles.card}>
        <div className={styles.wrapper}>
            <img src={item.src.large} alt={item.photographer} />
        </div>
        <div className={styles.title}>
            <h1>{item.photographer}</h1>
        </div>
    </div>
  )
}
