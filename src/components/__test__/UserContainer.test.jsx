import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import UserContainer from '../users/UserContainer'

describe('UserContainer',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< UserContainer />)
    })
})