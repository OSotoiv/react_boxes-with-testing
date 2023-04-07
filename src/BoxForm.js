import React from "react";

const BoxForm = ({ submitBoxForm, updateFormState, formState }) => {
    return (<>
        <form onSubmit={submitBoxForm}>
            <label htmlFor="width">Width:</label>
            <input onChange={updateFormState} value={formState.width} type="number" id="width" name="width" placeholder="Enter width" required />

            <label htmlFor="height">Height:</label>
            <input onChange={updateFormState} value={formState.height} type="number" id="height" name="height" placeholder="Enter height" required />

            <button type="submit">Submit</button>
        </form>
    </>)
}
export default BoxForm;