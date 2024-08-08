import React from 'react'
import data from '../../helpers/data'
import Card from './Card'
import styles from "./Main.module.css";

export default function Main() {
    console.log(data)
  return (
    <div className={styles.cardContainer}>
        {data.map((item, index) => (
            <Card item = {item} key = {index}/>
        ))}
    </div>
  )
}




