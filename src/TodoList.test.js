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
it('should start with no todos');
it('should render a todo when form is submitted');
it('should remove a todo when the `remove` button clicked')
it('should strike through the todo when the `done` button is clicked')