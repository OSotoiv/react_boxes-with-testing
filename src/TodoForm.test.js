import React from "react";
import TodoForm from './TodoForm'
import { render, fireEvent } from "@testing-library/react";
const form = {
    formData: { todo: "" },
    submitTodoForm: function (e) { e.preventDefault() },
    updateFormState: function (e) { e.preventDefault() }
}

it('pass SMOKE TEST', () => {
    render(<TodoForm formState={form.formData} submitTodoForm={form.submitTodoForm} updateFormState={form.updateFormState} />)
});
it('matches snapshot', () => {
    const { asFragment } = render(<TodoForm formState={form.formData} submitTodoForm={form.submitTodoForm} updateFormState={form.updateFormState} />)
    expect(asFragment()).toMatchSnapshot();
});
it('renders todo input that should be empty', () => {
    const { getByLabelText } = render(<TodoForm formState={form.formData} submitTodoForm={form.submitTodoForm} updateFormState={form.updateFormState} />)
    const todoInput = getByLabelText('Todo:')
    expect(todoInput).toBeInTheDocument()
    expect(todoInput.value).toEqual("")
})
it('renders a submit button for todo form', () => {
    const { getByRole } = render(<TodoForm formState={form.formData} submitTodoForm={form.submitTodoForm} updateFormState={form.updateFormState} />)
    const submitTodoButton = getByRole('button');
    expect(submitTodoButton).toBeInTheDocument();
})
