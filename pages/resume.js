import React from 'react'
import { useState } from 'react'

export default function resume() {
  const [file, setFile] = useState(null)
  
  const handleChange = (event) =>{
    console.log(event.target.files);
    setFile(event.target.files[0])
  }

//   const handleSubmit = async (e) =>{
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file_upload",file);
//     console.log("inside submit",formData)
//     try {
//       const endpoint = "http://127.0.0.1:8000/uploadfile"
//       const response  = await fetch(endpoint,{
//         method:"POST",
//         body:formData
        
//       });
//       if(response.ok){
//         console.log("done");
//       }
//       else{
//         console.log("no");
//       }
//     }
//     catch(e){
// console.log("error");
//     }
//   }

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData();
      formData.append("file_upload",file);
      console.log("inside submit",formData)
      try {
        const endpoint = "http://127.0.0.1:8000/uploadfile"
        const response  = await fetch(endpoint,{
          method:"POST",
          body:formData
          
        });
        const data = await response.json();
        console.log("resp",data.done)
        if(response.ok){
          console.log("done");
        }
        else{
          console.log("no");
        }
      }
      catch(e){
  console.log("error");
      }
    }


  return (
    <div>
<form onSubmit={handleSubmit}>

      <input type="file" onChange={handleChange}/>
      <button type="submit" >Submit</button>
</form>
    </div>
  )
}
