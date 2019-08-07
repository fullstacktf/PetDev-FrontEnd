import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import FeedUser from '../FeedUser'

describe('FeedUser',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< FeedUser />)
    })
})