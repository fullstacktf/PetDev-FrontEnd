import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import Login from '../Login'

describe('Login',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< Login />)
    })
})