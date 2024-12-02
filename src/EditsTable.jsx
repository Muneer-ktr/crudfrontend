import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { editUser } from './services/allAPI';

function EditsTable({user,setEditResponse}) {
    console.log(user);
    const [updateUser,setUpdateUser]=useState({
        id: user.id,
        name:user.name,
        email:user.email,
        designation:user.designation,
        salary:user.salary
    })
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleUpdate= async()=>{
    //     const {id,name,email,designation,salary} = updateUser
    //     if(!id || !name || !email || !designation || !salary ){
    //         alert('Please fill the form')
    //     }else{
    //         // api call
    //         const response = await editUser(id,updateUser)
    //         console.log(response);
    //         if(response.status === 200){
    //             handleClose()
    //         }else{
    //             console.log(response);
                
    //         }
    //     }
    // }
    const handleUpdate = async()=>{
       const {id,name,email,designation,salary} = updateUser
       if(!id || !name || !email || !designation || !salary) {
        alert("edit your deatils")
       }else{
        const response  =await editUser(id,updateUser)
        console.log(response);
        if(response.status === 200){
            handleClose()
            setEditResponse(response)
        }else{
            console.log(response);
        }
       }
    }
console.log(updateUser);
    return (
        <div>
            <button className="btn btn-dark me-3" onClick={handleShow}>
                <i
                    className="fa-solid fa-pen-to-square fa-lg"
                    style={{ color: '#ffffff' }}
                ></i>
                Edit
            </button>
            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="numbe" id="form3Example1cg" className="form-control form-control-lg"  placeholder='Enter Your Employee ID' value={updateUser.id} />
                </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Enter Your Name' value={updateUser.name} onChange={(e)=>setUpdateUser({...updateUser,name:e.target.value})} />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter Your mail'value={updateUser.email}  onChange={(e)=>setUpdateUser({...updateUser,email:e.target.value})}/>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" placeholder='Desigation' value={updateUser.designation}  onChange={(e)=>setUpdateUser({...updateUser,designation:e.target.value})}/>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Salary' value={updateUser.salary} onChange={(e)=>setUpdateUser({...updateUser,salary:e.target.value})}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditsTable