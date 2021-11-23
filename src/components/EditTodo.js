import React,{ useState} from 'react'
import {Button, Modal,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/todoActions';

const EditTodo = ({el}) => {
    
    
const [show, setShow] = useState(false);

const [description, setDescription] = useState(el.x)
const handleDescription=(e)=>{
    setDescription(e.target.value)
}
const handleshow = () => setShow(!show);
const  dispatch =useDispatch()
return (
  <>
    <Button variant="primary" onClick={handleshow} style={{width:"70px" ,height:"39px" }}>
     Edit
    </Button>
    
    <Modal show={show} onHide={handleshow}>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form style={{display :'flex', width:"70%" , margin:"150px auto"}}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="" placeholder="add todo ..." value={description} onChange={handleDescription} />
  </Form.Group>

   </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleshow}>
          Close
        </Button>
        <Button variant="primary" onClick={()=> dispatch(editTask({id:el.id, x: description}))}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

        
    


export default EditTodo
