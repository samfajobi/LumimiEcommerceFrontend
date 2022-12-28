import React, {  useState } from 'react'
import styles from "./payment.module.css"



const PaymentPage = () => {


 const publicKey = "pk_test_eca2556b29edb40e2993af4d59b7bc85a296d452"
  const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")




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
            <input
             type="text"
             id="name"
             onClick={ (e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.checkoutField}>
            <label>Email</label>
            <input
              type="text"
              id="name"
              onClick={ (e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.checkoutField}>
            <label>Phone</label>
            <input
              type="text"
              id="name"
              onClick={ (e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentPage