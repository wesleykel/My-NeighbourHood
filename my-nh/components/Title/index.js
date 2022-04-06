import React, { useContext, useState } from 'react'
//import ThemeContext from '../theme-context'
import style from "./Title.module.css"




const Heading1 = () => {

//const {themes, toggleTheme} = useContext(ThemeContext)

//const [theme ,setTheme] = useState(themes)

/*toggleTheme = () =>{

if( theme === themes.dark){


 
    themes =themes.light
}else{


    setTheme(themes.dark)

}



}*/


    return (
        <div  /*style={themes}*/ className={style.wrapper}>
       
           <h1>My Neighbourhood</h1> 
           <h3>Re-Home , Reuse, Recycle</h3>
           <div className={style.wrapper2}>

               <button /*onClick={()=>toggleTheme (themes == "dark" ? "light" : "dark")}*/>DARK</button>
           </div>
        </div>
    )
}

export default Heading1