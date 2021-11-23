import React ,{useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { addTask } from './../redux/actions/todoActions';
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [input, setInput] = useState('');
    const handleInput =(e) =>{
        setInput(e.target.value)
    }

    const dispatch = useDispatch()
    return (
        <div>
   <Form style={{display :'flex', width:"70%" , margin:"150px auto"}}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="" placeholder="add todo ..." value={input} onChange={handleInput} />
  </Form.Group>
  <Button onClick={()=> dispatch(addTask({ id :Math.random(), x: input}))} style={{height :"40px"}}>Add</Button>
   </Form>
            
        </div>
    )
}

export default AddTodo
