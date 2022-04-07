import React, { useState } from 'react'
import DisplayCard from '../DisplayCard'
import style from "./FrontpageOutput.module.css"



const FrontPageRequest = () => {
   const [data , setData]=useState([]) 

function fetchAll(){
fetch("https://neighbouthood.herokuapp.com/users")

.then(response => response.json())
.then(data =>setData(data))

}
fetchAll()



    





    
    
    
    
    
    
    return (<>
        <div className={style.wrapper}>
<div className={style.searchBar}>
<form className={style.searchBarInner}>
<div className={style.options}>

Search by:
</div>

<div className={style.options}>
<label>Category:  </label>
<select>
<option value=""></option>
<option value="Electronics">Electronics</option>
<option value="Collectables & Antiques">Collectables & Antiques</option>
<option value="Clothes">Clothing</option>
<option value="Home & Garden">Home & Garden</option>
<option value="Jewellery & Watches">Jewellery & Watches</option>
<option value="Sporting Goods">Sporting Goods</option>
<option value="Toys and Games">Toys and Games</option>
<option value="Other">Other</option>

</select>

</div>

<div className={style.options}>
<label>Condition</label>
<select>
<option value="new">New</option>
<option value="used">Used</option>  
</select>
</div>
<div className={style.options}>
<label>Item name</label>
<input type="text"></input>
</div>
<div className={style.options}>
<button id={style.button} type="submit">Search</button>
</div>


</form>




</div>
 </div>
 <div  className={style.grid} >

{data.map((item)=>{

return(<DisplayCard pic={item.imageURL}  title={item.title} condition={item.condition} postcode={item.postcode} cat={item.cat} description={item.description}/>)





})}



</div>
 </>
    )
}

export default FrontPageRequest