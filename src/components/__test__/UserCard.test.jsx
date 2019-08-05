import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import UserCard from '../users/UserCard'

describe('UserCard',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< UserCard />)
    })
})