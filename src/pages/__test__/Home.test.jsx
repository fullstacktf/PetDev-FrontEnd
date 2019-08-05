import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import Home from '../Home'

describe('Home',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< Home />)
    })
})