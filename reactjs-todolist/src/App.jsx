import { useState } from "react"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {
  const [todos, setTodos] = useState([
    'gymin', 
    'dont wanna',
    'work'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  } 

  function handleEditTodo(index) {
    
  }

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </main>
  )
}

export default App
