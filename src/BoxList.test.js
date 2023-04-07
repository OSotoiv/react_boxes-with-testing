import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BoxList from "./BoxList";

it('renders SMOKE TEST', () => {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('start with no boxes', () => {
    const { queryByTestId } = render(<BoxList />);
    expect(queryByTestId('box')).toBeNull();
})

it('should render a form with empty values', () => {
    const { getByRole, getByLabelText, queryByTestId } = render(<BoxList />);
    const widthInput = getByLabelText('Width:');
    expect(widthInput).toBeInTheDocument();
    expect(widthInput).toHaveValue(null);

    const heightInput = getByLabelText('Height:');
    expect(heightInput).toBeInTheDocument();
    expect(heightInput).toHaveValue(null);

    expect(getByRole('button')).toBeInTheDocument()
    expect(queryByTestId('box')).toBeNull();
})

it('should render a box when form is submitted', async () => {
    const { getByText, getByLabelText, getByTestId, debug, queryByTestId } = render(<BoxList />);
    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const submitButton = getByText('Submit');

    fireEvent.change(widthInput, { target: { value: 200 } });
    fireEvent.change(heightInput, { target: { value: 300 } });
    fireEvent.click(submitButton);

    const box = getByTestId('box');
    expect(box).toBeInTheDocument();

    expect(widthInput).toHaveValue(null);
    expect(heightInput).toHaveValue(null);

    fireEvent.mouseEnter(box);
    const boxRemoveButton = getByTestId('box-remove');
    expect(boxRemoveButton).toBeInTheDocument()

    fireEvent.click(boxRemoveButton);
    expect(queryByTestId('box')).toBeNull()
})