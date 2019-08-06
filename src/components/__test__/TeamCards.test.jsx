import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import TeamCards from '../users/TeamCards'

describe('TeamCards',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< TeamCards />)
    })
})