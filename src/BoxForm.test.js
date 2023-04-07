import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxForm from "./BoxForm";

it('renders SMOKE TEST', () => {
    render(<BoxForm formState={{ width: '', height: '' }} submitBoxForm={(e) => e.preventDefault()} updateFormState={(e) => e.preventDefault()} />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxForm formState={{ width: '', height: '' }} submitBoxForm={(e) => e.preventDefault()} updateFormState={(e) => e.preventDefault()} />);
    expect(asFragment()).toMatchSnapshot();
});

it('should have empty inputs for width and height', () => {
    const { getByLabelText } = render(<BoxForm formState={{ width: '', height: '' }} submitBoxForm={(e) => e.preventDefault()} updateFormState={(e) => e.preventDefault()} />);
    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    expect(widthInput).toBeInTheDocument();
    expect(widthInput).toHaveValue(null);
    expect(heightInput).toBeInTheDocument();
    expect(heightInput).toHaveValue(null);
});

it('should have a submit button', () => {
    const { getByText } = render(<BoxForm formState={{ width: '', height: '' }} submitBoxForm={(e) => e.preventDefault()} updateFormState={(e) => e.preventDefault()} />);
    const button = getByText('Submit');
    expect(button).toBeInTheDocument();
});