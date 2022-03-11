import React from 'react'
import styles from './index.module.css'

export const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["content"]}>
        Copyright &copy; {new Date().getFullYear()} MISLab 版权所有
      </div>
    </div>
  )
}
