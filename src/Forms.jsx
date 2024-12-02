import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addUser } from './services/allAPI'

function Forms() {
  const [user,setUser] = useState({
    id: '',
    name:'',
    email:'',
    designation:'',
    salary:''
  })
  // const handleSubmit = async()=>{
  //   const {id,name,email,designation,salary} = user
  //   if(!id || !name || !designation || !salary || !email){
  //     alert("Please fill the form ")
  //   }else{
  //     const response = await addUser(user)
  //     if(response.status === 201){
  //       alert("User added")
  //     }else{
  //       console.log(response);
  //     }
      
  //   }
  // }
 
  const handleSubmit = async()=>{
    const {id,name,email,designation,salary} = user
    if(!id || !name || !designation || !email || !salary){
      alert("Must complete All fileds")
    }else{
      const res =await addUser(user)
      if(res.status === 201){
        setUser({id:'',name:'',email:'',designation:'',salary:''})
        alert("User added")
      }else{
        console.log(res);
      }

    }
  }
  
  return (
    <div>
 <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an Employee</h2>
              <form>
              <div data-mdb-input-init className="form-outline mb-4">
                  <input type="numbe" id="form3Example1cg" className="form-control form-control-lg" value={user.id} onChange={(e)=>setUser({...user,id:e.target.value})} placeholder='Enter Your Employee ID' />
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} placeholder='Enter Your Name' />
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg"value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Enter Your mail'/>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg" value={user.designation} onChange={(e)=>setUser({...user,designation:e.target.value})} placeholder='Desigation' />
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="form3Example4cdg" className="form-control form-control-lg" value={user.salary} onChange={(e)=>setUser({...user,salary:e.target.value})} placeholder='Salary'/>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body me-3" onClick={handleSubmit}>Submit</button>
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"><Link to={'/'} style={{textDecoration:'none', color:'black'}}>show Employee</Link></button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Forms

