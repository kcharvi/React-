import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let mystyle={
    minHeight: "70vh",
    margin: "10px auto"
  }
  console.log("todo Adding",props.todos)
  return (
  <div className="container my-3" style={mystyle}>
    <h3 className="">Todos List</h3>
    {
    props.todos.length===0?"No todos! YAY!":  
      props.todos.map((todo)=>{
         return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>             
      }
    )}      
    </div>
  )
};
