import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import UserCardProfile from '../users/UserCardProfile'

describe('UserCardProfile',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< UserCardProfile />)
    })
})