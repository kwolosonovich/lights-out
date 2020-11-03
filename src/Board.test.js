import React from 'react';
import { render } from "@testing-library/react";
import App from './App'
import Board from './Board'
import Random from './Random';
import Message from './Message';


// smoke test
it("renders without crashing", () => {
  render(<Board />);
});

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<Board />)
    expect (asFragment()).toMatchSnapshot()
})

