import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import Todo from './Todo'

const INIT_FORM_STATE = { todo: "" }
const TodoList = () => {
    const [listOfTodos, setlistOfTodos] = useState([])
    const [formData, setFormData] = useState(INIT_FORM_STATE)
    function updateFormState(e) {
        const { name, value } = e.target
        setFormData(formDate => ({ ...formDate, [name]: value }))
    }
    function addTodo(data) {
        //make new box then update the list of boxes to new list with new box added
        const newTodo = { ...data, id: uuidv4(), state: 'incomplete' }
        setlistOfTodos([...listOfTodos, newTodo]);

    }
    function submitTodoForm(e) {
        //when form submits create a new todo with form data
        e.preventDefault()
        addTodo(formData);
        setFormData(INIT_FORM_STATE);
    }
    function removeTodo(id) {
        setlistOfTodos(listOfTodos.filter(tood => (tood.id !== id)))
    }
    function isDone(id) {
        setlistOfTodos(listOfTodos.map(listItem => {
            console.log(listItem)
            console.log(id)
            if (listItem.id === id) {
                listItem.state = 'done'
            }
            return listItem;
        }))
    }
    return (<>
        <TodoForm formState={formData} submitTodoForm={submitTodoForm} updateFormState={updateFormState} />
        <ul>
            {listOfTodos.map(todo => <Todo task={todo} id={todo.id} key={todo.id} removeTodo={removeTodo} isDone={isDone} />)}
        </ul>
    </>)
}
export default TodoList;