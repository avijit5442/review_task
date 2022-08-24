import axios from "axios"
import { useState,useEffect } from "react"

export default function Products() {
  const [products,setproducts]=useState([])




function loadProducts(){
  axios.get(`http://localhost:9400/getproducts`)
       .then((response)=>{
        setproducts(response.data)
        console.log(response.data)
       })
}


  useEffect(()=>{
    loadProducts()
  },[])
  return (
    <div className="row">
      <div className="col-5">
          { 
            products.map(product=> 
              <>
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <h4 className="text-success bi bi-star-fill">{product.rating.rate}</h4>
              <img height="200px" width="200px" src={product.image}/>
              <button className="btn btn-danger">Add to cart</button>
              <hr/>
              
              </>
            )
          }
        
      </div>

     
    </div>
  )
}
