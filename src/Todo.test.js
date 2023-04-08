import React from "react";
import Todo from './Todo'
import { render, fireEvent } from "@testing-library/react";

const todo = {
    id: 'todo-123',
    todo: 'Write Testing',
    state: 'incomplete',
    removeTodo: function (e) { e.preventDefault() },
    isDone: function (e) { e.preventDefault() }
}

it('render SMOKE TEST', () => {
    render(<Todo task={todo} removeTodo={todo.removeTodo} isDone={todo.isDone} id={todo.id} key={todo.id} />)
});

it('matches snapshot', () => {
    const { asFragment } = render(<Todo task={todo} removeTodo={todo.removeTodo} isDone={todo.isDone} id={todo.id} key={todo.id} />)
    expect(asFragment()).toMatchSnapshot();
});

it('renders li for a todo', () => {
    const { queryByTestId } = render(<Todo task={todo} removeTodo={todo.removeTodo} isDone={todo.isDone} id={todo.id} key={todo.id} />)
    const li = queryByTestId('todo');
    expect(li).toBeInTheDocument();
    expect(li.innerHTML).toBe(todo.todo.toUpperCase())
});
it('renders a done button and a delete button when mouseover the todo', () => {
    const { queryByTestId } = render(<Todo task={todo} removeTodo={todo.removeTodo} isDone={todo.isDone} id={todo.id} key={todo.id} />)
    const li = queryByTestId('todo');
    //done button and remove button are not visible
    expect(queryByTestId('is-done')).toBeNull();
    expect(queryByTestId('todo-remove')).toBeNull();

    //buttons are now visible during mouseover
    fireEvent.mouseEnter(li);
    expect(queryByTestId('is-done')).toBeInTheDocument();
    expect(queryByTestId('todo-remove')).toBeInTheDocument();

    //buttons are not visible when mouse leaves
    fireEvent.mouseLeave(li);
    expect(queryByTestId('is-done')).toBeNull();
    expect(queryByTestId('todo-remove')).toBeNull();

    //clicking a button should update the state of the list of todos
    //but we dont have the function on the todo itself unless it is passed down
    //so we can not test clicking the button in here.
});