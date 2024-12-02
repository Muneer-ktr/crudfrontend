import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'; 
import { deleteUser, getUSer } from './services/allAPI';
import EditsTable from './EditsTable';

function Tables() {
  const [users, setUser] = useState([])
  // const [editResponse,setEditResponse] = useState('')
  const [editResponse,setEditResponse] =useState('')



  const getUserData= async()=>{
    const response = await getUSer()
    setUser(response.data)
  }
  const handleDelete = async(id)=>{
    const response = await deleteUser(id)
    console.log(response);
    getUserData()
  }
  useEffect(()=>{
getUserData()
  },[editResponse])


  return (
    <div>
      <section className="100vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Employee Details</h2>
                    <button className="btn btn-dark mb-4">
                      <Link to="add" style={{ textDecoration: 'none', color: 'white' }}>
                        Add Employee
                      </Link>
                    </button>

                    <table className="table table-bordered table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th>ID</th>
                          <th>Employee Name</th>
                          <th>Designation</th>
                          <th>Salary</th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          users?.map((data)=>(
                            <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.designation}</td>
                            <td>{data.salary}</td>
                            <td>{data.email}</td>
                            <td> <EditsTable user={data} setEditResponse={setEditResponse}/></td>
                            <td>
                              <button className="btn btn-dark" onClick={()=>handleDelete(data.id)}>
                                <i
                                  className="fa-solid fa-trash fa-lg"
                                  style={{ color: '#ebeef4' }}
                                ></i>
                                Delete
                              </button>
                            </td>
                          </tr>
                          ))
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}

export default Tables;
