import React from 'react'
import {Form} from 'react-bootstrap'
import Delete from './Delete'
import EditTodo from './EditTodo'


const Todo = ({el}) => {

  
    return (
        <div style={{display:"flex"}}>
           <Form>
         
           <h2>  {el.x}</h2>
         <EditTodo el={el}/>
         
         <Delete el={el}/>
         </Form>
         
         
         
        </div>
    )
}

export default Todo
