import React from 'react'
import { deleteTask } from '../redux/actions/todoActions'
import { useDispatch } from 'react-redux';
import {Button} from 'react-bootstrap'

const Delete = ({el}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Button variant="primary" onClick={()=> dispatch(deleteTask(el.id))}>
          Delete
         </Button>
        </div>
    )
}

export default Delete
