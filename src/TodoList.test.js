import React from "react";
import TodoList from './TodoList'
import { render, fireEvent } from "@testing-library/react";

it('should pass SMOKE TEST', () => {
    render(<TodoList />)
});
it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
});

it('should render a Form to add a Todo', () => {
    const { getByLabelText, getByRole } = render(<TodoList />);
    const todoFormInput = getByLabelText('Todo:');
    expect(todoFormInput).toBeInTheDocument();
    expect(todoFormInput.value).toEqual("");
    expect(getByRole('button')).toBeInTheDocument();
});
it('should start with no todos', () => {
    const { queryByTestId } = render(<TodoList />);
    expect(queryByTestId('todo')).toBeNull()
});
it('should render a todo when form is submitted', () => {
    const { queryByTestId, getByLabelText, getByRole } = render(<TodoList />);
    //no todos when app starts
    expect(queryByTestId('todo')).toBeNull()

    //submit form for a new todo
    const todoFormInput = getByLabelText('Todo:');
    fireEvent.change(todoFormInput, { target: { value: 200 } });
    const todoFormButton = queryByTestId('submit-todo-btn');
    fireEvent.click(todoFormButton);

    //now todo should be on the page
    const todoItem = queryByTestId('todo')
    expect(todoItem).not.toHaveStyle('textDecoration: line-through');

    //should strike through todo when done button clicked
    const li = queryByTestId('todo');
    fireEvent.mouseEnter(li)
    const doneBtn = queryByTestId('is-done')
    fireEvent.click(doneBtn)
    expect(queryByTestId('todo')).toHaveStyle('textDecoration: line-through')

    const removeBtn = queryByTestId('todo-remove');
    fireEvent.click(removeBtn);
    expect(queryByTestId('todo')).toBeNull()

});
// it('should remove a todo when the `remove` button clicked')
// it('should strike through the todo when the `done` button is clicked')