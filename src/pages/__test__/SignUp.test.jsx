import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import SignUp from '../SignUp'

describe('SignUp',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< SignUp />)
    })
})