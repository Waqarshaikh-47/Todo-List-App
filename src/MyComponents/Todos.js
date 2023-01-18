import React from 'react'
import {TodoItem, TodoItems} from "./TodoItems";


export const Todos = (props) => {
  let myStyle ={
    minHeight: "70vh",
    margin: "40px auto"

  }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className=' my-3'>Todos List</h3>
        { props.todos.length===0? <h3>No todos to display</h3>: 
        props.todos.map((todo)=>{
          return (<TodoItems todo={todo}  onDelete={props.onDelete} key={todo.sno}/>)
        })
        }
    </div>
  )
}
