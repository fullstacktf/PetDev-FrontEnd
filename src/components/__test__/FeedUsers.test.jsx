import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import FeedUsers from '../users/FeedUsers'

describe('FeedUsers',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< FeedUsers />)
    })
})