import React from 'react'
import style from "./Displaycard.module.css"
const DisplayCard = ({pic ,title , condition, price, postcode , cat, description, datePosted}) => {
    return (
        <div className={style.wrapper}>

        <div className={style.picContainer}>
            <img className={style.picture} src={pic} alt={title}></img>
        </div>

        <div className={style.textContainer}>
          <h3 className={style.text}>{title}</h3> 
          <p className={style.text} >{condition}</p> 
        
          <p className={style.text} >{postcode}</p>
        <p className={style.text} >{description}</p>
         <p>{datePosted}</p>
         <p className={style.text} >{cat}</p>
        </div> 
        </div>
    )
}

export default DisplayCard