import React, { useEffect, useState} from 'react'
import  {useRouter } from "next/router"
//import { storage } from '../../firebase/firebase'
import { getStorage ,ref ,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import style from "./inputNew.module.css"
import storage from '../../firebase/firebase'
import randomstring from "randomstring"

const InputForm = () => {
    const [title , setTitle] = useState("")
    const [image , setImage] = useState("")
    //const allInputs ={imgUrl:""}
    const [imageURL, setImageURL] = useState("")
    const [text , setText] = useState("")
    const [postCode, setpostCode]= useState("")
    const [catergories, setCatergories] = useState("Electronics")
    const [object , setObject] = useState()
    const [progress, setProgress] = useState()
    const [condition, setCondition] = useState()
  
let url =""

const router = useRouter()

 const  storage =  getStorage()
 
 
 const uploadPhoto = () => {

//e.preventDefault()  


/*if(!image){

console.log(`not an image ${typeof(image.name)}`)
return
}*/
const randomString = randomstring.generate(12)
const storageRef =ref (storage,`images/${randomString}${image.name}`)

const uploadTask = uploadBytesResumable(storageRef,image)

uploadTask.on("state_changed",
(snapshot)=>{
const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
setProgress(progress)

},
(error)=>{

    console.log(error)
},
()=>{

    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
      setImageURL(downloadURL)

url = downloadURL
console.log(url)
    })

     
   
})



}

useEffect(()=>{


uploadPhoto()


},[image])

function postData(){
 
  if(!title || !text ||!postCode  ){
return


  }


  fetch("https://neighbouthood.herokuapp.com/users",{
    method:"POST",
  
    headers:{
      //'Access-Control-Allow-Origin' : '*',
      //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    
      imageURL:imageURL,
      title:title,
      description:text,
      condition: condition,
      postcode:postCode,
      cat:catergories,
    
    
    })

  
    })
       router.push("/")
   console.log(imageURL,title,catergories,text ,condition)
      console.log("new thing added")
   
 }
 console.log(image)
 return (



    
 

   
 <form className={style.wrapper}    method="post">
<ul>
<li>
<label>Title</label>
<input name="title" placeholder='Name of Item' onChange={(e)=>{setTitle(e.target.value)}} value={title} required={true}></input>
</li>
<li>
<label>Catergory</label>
<select  onChange={(e)=>{setCatergories(e.target.value)}} required={true} >

<option value={null}>Choose a catergory</option>
<option value="Collectables & Antiques">Collectables & Antiques</option>
<option value="Clothes">Clothing</option>
<option value="Home & Garden">Home & Garden</option>
<option value="Jewellery & Watches">Jewellery & Watches</option>
<option value="Sporting Goods">Sporting Goods</option>
<option value="Toys and Games">Toys and Games</option>
<option value="Other">Other</option>
</select>
</li>
<li>
<label> Your items condition</label>
<select  onChange={(e)=>{setCondition(e.target.value)}} required={true} >
<option value={null} >Choose a  condition</option>
<option value="New">New</option>
<option value="Used">Used</option>

</select>

</li>
<li>
<label>Picture</label>
<input  name="pic" type="file" placeholder='picture' onChange={(e)=>{setImage(e.target.files[0])}}     required={true}></input>
<p>{progress}</p>

</li>
<li>
<label>Description</label>  
<textarea name="descrip" onChange={(e)=>{setText(e.target.value)}}  required={true}></textarea>

</li>

<li>
<label>Postcode</label>
<input type="text"   onChange={(e)=>{setpostCode(e.target.value)}}   ></input>
</li>

<li className="button">
<button type='button' onClick={postData} >Post your item</button>

</li>



</ul>


  </form>


    )
}

export default InputForm