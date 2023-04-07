import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";
import { v4 as uuidv4 } from 'uuid';



it('renders SMOKE TEST', () => {
    render(<Box width={100} height={100} removeBox={(e) => console.log(e)} id='abc-123' />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<Box width={100} height={100} removeBox={(e) => console.log(e)} id={'abc-123'} />);
    expect(asFragment()).toMatchSnapshot();
});
