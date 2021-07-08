import "./App.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { AddTodo } from "./components/AddTodo";
import { About } from "./components/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
function App() {
  
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    let initTodo = JSON.parse(localStorage.getItem("todos"));
    setTodos(initTodo);
  },[])
    // if (localStorage.getItem("todos") === null) {
    //   console.log(todos,"gt")
    //   initTodo = [];
    // } else {
    //   initTodo = 
    // }
    // {
    //   sno: 1,
    //   title: "Go to the market",
    //   desc: "Get veges and fruits",
    // },
    // // {
    // //   sno: 2,
    // //   title: "Mall",
    // //   desc: "Shop Clothes",
    // // },
    // // {
    // //   sno: 3,
    // //   title: "Study",
    // //   desc: "Artificial Intelligence",
    // // },
    // // {
    // //   sno: 4,
    // //   title: "Cook Dinner",
    // //   desc: "Include some salad and Icecream",
    // // },


  useEffect(() => {
    console.log("ue")
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);




  const onDelete = (todo) => {
    console.log("I am deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    // let todoArr = todos;
    // todoArr.push(myTodo);
    // setTodos(todoArr);
    //OR  :
    setTodos((todos) => [...todos, myTodo]);
    console.log("todo state", todos);
  };

  
 
  console.log("render")
  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
