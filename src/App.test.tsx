import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

describe('integration testing', function () {
    let root: HTMLDivElement = HTMLDivElement.prototype

    beforeEach(() => {
      root = document.createElement("div")
    })

    it('should', async () => {
        ReactDOM.render(<App/>, root)
        expect(root.hasAttribute("home")).toBeTruthy()
    });

    it('workshop', async () => {

    })
});

