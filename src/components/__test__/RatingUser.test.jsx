import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import RatingUser from '../users/RatingUser'

describe('RatingUser',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< RatingUser />)
    })
})