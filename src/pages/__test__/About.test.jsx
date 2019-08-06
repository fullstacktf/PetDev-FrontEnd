import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import About from '../About'

describe('About',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< About />)
    })
})