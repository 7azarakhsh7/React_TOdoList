import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa0, faCheck, faCheckDouble, faExchange, faList, faListCheck, faMarker, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, deleteTodo, editTodo, toggleComplete,done}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        <FontAwesomeIcon className="check-icon" icon={faExchange} onClick={() => toggleComplete(task.id)} />
        </div>
    </div>
  )
}
