import { Link } from 'gatsby'
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX designer & web developer</p>
        <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
      </div>
      <img src="/holi.jpg" alt="" style={{ maxWidth: '80%'}}/>
    </section>
    </Layout>
  )
}
