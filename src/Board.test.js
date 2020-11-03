import React from 'react';
import { render, fireEvent} from "@testing-library/react";
import Board from './Board'
import Random from './Random';
import Message from './Message';

describe("<Board /> rendering", () => {
    describe("render board", () => {
      // smoke test
    //   it("renders without crashing", () => {
    //     render(<Board />);
    //   });

    //   // snapshot test
    //   it("matches snapshot", () => {
    //     const { asFragment } = render(<Board />);
    //     expect(asFragment()).toMatchSnapshot();
    //   });
    // });

    it("does not show win message at start", () => {
       const { getByText } = render(<Board />);
       expect(getByText("You Win!")).not.toBeInTheDocument();
     });


    
    // **************************need to fix in code *************************
    it('shows win message when lights off', () => {
        const { getByText } = render(<Board chanceLightStartsOn={0.25} />);
        expect(getByText('You Win!')).toBeInTheDocument();
    })
})
})
