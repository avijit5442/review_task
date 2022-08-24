import {useState} from 'react'
import axios from "axios"
export default function AdminOperation() {
  const [products,setproducts]=useState([])
  axios.get("http://localhost:9400/getproducts")
  .then((response)=>{
    setproducts(response.data)
  })
  function handleEdit(e){
    var ID=e.target.id
  }
  function handleDelete(e){
    var ID=e.target.id
    axios.deleteproduct("http://localhost:9400/deleteproduct/:id",{id:ID})
         .catch(function(error){
          console.log(error)
         })
  }
  
  return (
      <>
         <h3 className='text-danger text-center'>Admin Management area</h3>
         <hr/>
         <table className='table table-bordered able-hover'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Description</td>
              <td>Price</td>
              <td>Image</td>
              <td colSpan={2}>Manage</td>
            </tr>
          </thead>

          <tbody>
            {
              products.map((product)=>
              <>
              <tr>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td><img height="100px" width="100px" src={product.image}/></td>
              <td><button onClick={handleEdit} id={product.id} className='btn btn-success'>Edit</button></td>
              <td><button onClick={handleDelete} id={product.id}className='btn btn-danger'>Delete</button></td>
            </tr>
            <hr/></>
              )
            }
          </tbody>
         </table>

      </>
         )
}
