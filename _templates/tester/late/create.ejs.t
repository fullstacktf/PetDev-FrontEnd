---
to: <%= path %>/<%= name %>.test.jsx
unless_exists: true
---
import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import <%= Name %> from '<%= dir %>/<%= name %>'

describe('<%= Name %>',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        expect( render(< <%= Name %> />)).toMatchSnapshot();
    })
}

