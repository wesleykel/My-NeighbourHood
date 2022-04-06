//import Head from 'next/head'
//mport Image from 'next/image'
import styles from '../styles/Home.module.css'
import Title from '../components/Title'
import AddNewItem from '../components/AddNewItemButton'
import FrontPage from '../components/FrontPageOutput'
export default function Home() {
  return (
<>
<Title/>
<AddNewItem/>
<FrontPage/>

</>
  )
}
