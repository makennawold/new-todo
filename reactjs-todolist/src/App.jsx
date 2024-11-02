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

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} />
    </main>
  )
}

export default App
