import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'

export default function Home() {
  return ( 
    <Layout>
      <h1>Home Page</h1>
      
      <div><Link to="/company/history">History</Link></div>
      <a href="/about">reg link</a>
    </Layout>
  )
}
