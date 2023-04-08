import React from "react";

const TodoForm = ({ submitTodoForm, updateFormState, formState }) => {
    return (<>
        <form onSubmit={submitTodoForm}>
            <label htmlFor="todo">Todo:</label>
            <input autoFocus onChange={updateFormState} value={formState.todo} type="text" id="todo" name="todo" placeholder="Enter todo" required />
            <button type="submit">Submit</button>
        </form>
    </>)
}
export default TodoForm;