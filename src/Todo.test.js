import React from "react";
import Todo from './Todo'
import { render, fireEvent } from "@testing-library/react";
import { v4 as uuidv4 } from 'uuid';
const todo = {
    id: 'todo-123',
    task: 'Write Testing',
    removeTodo: function (e) { e.preventDefault() },
    todoisDone: function (e) { e.preventDefault() }
}

it('render SMOKE TEST', () => {
    render(<Todo task={todo.task} id={todo.id} key={todo.id} removeTodo={todo.removeTodo} state={todo.todoisDone} />)
})

it('matches snapshot', () => {
    const { asFragment } = render(<Todo task={todo.task} id={todo.id} key={todo.id} removeTodo={todo.removeTodo} state={todo.todoisDone} />)
    expect(asFragment()).toMatchSnapshot();
})

it('has renders option buttons to mark as done or delete', () => {
    const { asFragment } = render(<Todo task={todo.task} id={todo.id} key={todo.id} removeTodo={todo.removeTodo} state={todo.todoisDone} />)
})