import React from 'react'
import  {useRouter } from "next/router"
const AddNewItem = () => {


    const router  = useRouter()  



 const onclick = ()=>{

router.push("/addItem")
    

}
   
   
    return (
        <div>
            <button onClick={onclick}>Add New Item +</button>
        </div>
    )
}

export default AddNewItem