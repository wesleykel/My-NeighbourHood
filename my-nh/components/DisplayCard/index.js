import React from 'react'
import style from "./Displaycard.module.css"
const DisplayCard = ({pic ,title , condition, price, postcode , cat, description, datePosted}) => {
    return (
        <div className={style.wrapper}>

        <div className={style.picContainer}>
            <img className={style.picture} src={pic} alt={title}></img>
        </div>

        <div className={style.textContainer}>
          <h3>{title}</h3> 
          <p>{condition}</p> 
          <p>{description}</p>
          <p>{postcode}</p>
  
         <p>{datePosted}</p>
         <p>{cat}</p>
        </div> 
        </div>
    )
}

export default DisplayCard