import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import TextContainer from './TextContainer'

describe('TextContainer',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< TextContainer />)
    })
})