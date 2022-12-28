import React from 'react'
import styles from "./payment.module.css"



const PaymentPage = () => {
  return (
    <div className={styles.App}>
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.overlayEffect}></div>
        <img
          className={styles.itemImage}
          src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="product"
        />
        <div className={styles.itemDetails}>
          <p className={styles.itemDetailsTitle}>Coconut Oil</p>
          <p className={styles.itemDetailsAmount}>NGN 100</p>
        </div>
      </div>
      <div className={styles.checkout}>
        <div className={styles.checkoutForm}>
          <div className={styles.checkoutField}>
            <label>Name</label>
            <input/>
          </div>
          <div className={styles.checkoutField}>
            <label>Email</label>
            <input/>
          </div>
          <div className={styles.checkoutField}>
            <label>Phone</label>
            <input/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentPage