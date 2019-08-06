import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import UserProfile from '../UserProfile'

describe('UserProfile',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< UserProfile />)
    })
})