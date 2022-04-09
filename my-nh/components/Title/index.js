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
       <div className={style.intro} ><img id={style.logo} src="pngwing.com.png"></img></div>
       <div className={style.intro}>
           <h1>My Neighbourhood</h1> 
           <h3>Re-Home , Recycle your unwanted stuff</h3>
           

              
           </div>
        </div>
    )
}

export default Heading1