import React from 'react'
import style from "./AddButton.module.css"
import  {useRouter } from "next/router"
//import { useContext ,useState } from 'react'
import ThemeContext from '../theme-context'


const AddNewItem = () => {


   // const themes = useContext(ThemeContext) 
    

const router  = useRouter()  

const onclick = ()=>{

router.push("/addItem")
    

}
   
   
    return (
        <div className={style.wrapper} >
            <button onClick={onclick}>Add New Item +</button>
        </div>
    )
}

export default AddNewItem