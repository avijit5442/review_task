import { useState,useEffect } from "react"
import axios from "axios"
export default function Reviews() {
const [reviews,setreviews]=useState([])
useEffect(()=>{
    axios.get("http://localhost:8080/seereviews")
    .then((response)=>{
      setreviews(response.data)
    })
},[])
function handleDelete(e){
  var ID=e.target.id;
  var del=reviews.filter((item)=>item._id!==ID)
  setreviews(del)
}
  return (
    <div className='container'>
      <h2 className='text-danger text-center'>Reviews</h2>
      <hr/>
      <table className="table table-bordered table-success bg-success">
      <thead>
        <tr className="bg-info">
          <td>Title</td>
          <td>Rating</td>
          <td>Description</td>
          <td>Manage</td>
        </tr>
      </thead>
      {
        reviews.map((review)=>
        <tbody>
        <tr>
          <td>{review.title}</td>
          <td>{review.rating}</td>
          <td>{review.description}</td>
          <td><button id={review._id} className="btn btn-danger m-2 btn-sm"onClick={handleDelete}>delete</button></td>
        </tr>
      </tbody>
        )
      }

      </table>
    </div>
  )
}
