import React from 'react'
import {Link} from "react-router-dom"
export default function ShopifyLandingPage() {
  return (
    <div>
        <nav className='row d-flex justify-content-between'>
        <div className='col-3'>
            <h2 className='m-4 text-info'>SHopify</h2>
           </div>
           <div className='col-3'>
            <h2 className='m-4 text-danger' style={{fontStyle:"italic"}}>SHoppIng Zone</h2>
           </div>
           <div className='col-2'>
            <Link to="/userlogin"><button className='btn btn-warning'>User</button></Link>
            <Link to="/adminlogin"><button className='btn btn-warning m-4'>Admin</button></Link>
           </div>
        </nav>
        <hr/>
        <img height="500px" width="100%" src={require("./best-buy.webp")}/>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, praesentium. Deleniti est magni dolor, aliquid, impedit cumque rem quos, aliquam sapiente vitae totam eum. Provident quas, ipsum velit quos ut adipisci exercitationem? Odit harum aperiam quia provident impedit maxime fugit eligendi. Possimus porro dolore laborum optio corrupti sapiente ullam, consequuntur quibusdam molestias dignissimos blanditiis accusantium temporibus reiciendis libero corporis omnis provident placeat dolorem a laudantium sequi quos. Quibusdam nemo adipisci amet delectus hic sunt. Perferendis aspernatur totam ipsa soluta perspiciatis nobis corrupti magnam nostrum provident quas libero consequatur adipisci nemo enim rem sunt eligendi architecto aliquid, ipsam eaque. Doloremque, vitae? </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Contact us
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, praesentium. Deleniti est magni dolor, aliquid, impedit cumque rem quos, aliquam sapiente vitae totam eum. Provident quas, ipsum velit quos ut adipisci exercitationem? Odit harum aperiam quia provident impedit maxime fugit eligendi. Possimus porro dolore laborum optio corrupti sapiente ullam, consequuntur quibusdam molestias dignissimos blanditiis accusantium temporibus reiciendis libero corporis omnis provident placeat dolorem a laudantium sequi quos. Quibusdam nemo adipisci amet delectus hic sunt. Perferendis aspernatur totam ipsa soluta perspiciatis nobis corrupti magnam nostrum provident quas libero consequatur adipisci nemo enim rem sunt eligendi architecto aliquid, ipsam eaque. Doloremque, vitae? </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Privacy Policy
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, praesentium. Deleniti est magni dolor, aliquid, impedit cumque rem quos, aliquam sapiente vitae totam eum. Provident quas, ipsum velit quos ut adipisci exercitationem? Odit harum aperiam quia provident impedit maxime fugit eligendi. Possimus porro dolore laborum optio corrupti sapiente ullam, consequuntur quibusdam molestias dignissimos blanditiis accusantium temporibus reiciendis libero corporis omnis provident placeat dolorem a laudantium sequi quos. Quibusdam nemo adipisci amet delectus hic sunt. Perferendis aspernatur totam ipsa soluta perspiciatis nobis corrupti magnam nostrum provident quas libero consequatur adipisci nemo enim rem sunt eligendi architecto aliquid, ipsam eaque. Doloremque, vitae? </p>
      </div>
    </div>
  </div>
</div>
<hr/>
<div className='text-center'>
  <p className='text-danger'>2022 @ all rights reserved</p>
  <p>Hosted and maintained by NIC</p>
</div>

    </div>
  )
}
