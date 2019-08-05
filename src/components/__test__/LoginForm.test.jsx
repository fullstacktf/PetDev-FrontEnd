import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import LoginForm from '../forms/LoginForm'

describe('LoginForm',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< LoginForm />)
    })
})