---
to: <%= path %>/__test__/<%= name %>.test.jsx
unless_exists: true
---
import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import <%= name %> from '<%= name  %>/<%= name  %>'

describe('<%= name %>',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< <%= name %> />);
    })
})

