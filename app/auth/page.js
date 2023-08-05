"use client"
import { useState } from "react";
import styles from "./auth.module.css";
export default function Auth() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword ] = useState("");


function handlerSubmit(){

}


  return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handlerSubmit}>
            <h2 className={styles.welcome}>Welcomre to Ecommerce Form</h2>
            <h3 className={styles.formTitle}>Please Register Below</h3>
            <input  className = {styles.formInput} type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <input  className = {styles.formInput} type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input className = {styles.formInput} type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button  className = {styles.formButton} type="submit">Sign me!</button>

        </form>
        <div className={styles.image}></div>
        </div>
  )}