import { useState } from "react"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

function App() {
  const [todos, setTodos] = useState([
    'gymin', 
    'dont wanna',
    'work'
  ])
  const [todoValue, setTodoValue] = useState('')

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
    const valueToBeEdited = todos[index]
    console.log(valueToBeEdited, "valueToBeEdited")
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </main>
  )
}

export default App
