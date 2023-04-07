import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import BoxForm from './BoxForm'
import Box from './Box'

const INIT_FORM_STATE = {
    width: "",
    height: ""
}
const BoxList = () => {
    const [formData, setFormData] = useState(INIT_FORM_STATE);
    const [listOfBoxes, setListOfBoxes] = useState([]);

    function updateFormState(e) {
        const { name, value } = e.target
        setFormData(formDate => ({ ...formDate, [name]: value }))
    }
    function addBox(data) {
        //make new box then update the list of boxes to new list with new box added
        const newBox = { ...data, id: uuidv4() }
        setListOfBoxes([...listOfBoxes, newBox]);

    }
    function submitBoxForm(e) {
        //when form submits create a new box with form data
        e.preventDefault()
        addBox(formData);
        setFormData(INIT_FORM_STATE);
    }
    function removeBox(id) {
        console.log(id)
        setListOfBoxes(listOfBoxes.filter(box => (box.id !== id)))
    }
    return (<>
        <BoxForm formState={formData} submitBoxForm={submitBoxForm} updateFormState={updateFormState} />
        {listOfBoxes.map(box => (<Box removeBox={removeBox} width={box.width} height={box.height} key={box.id} id={box.id} />))}
    </>)
}
export default BoxList