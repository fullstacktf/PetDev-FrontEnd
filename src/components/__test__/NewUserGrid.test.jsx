import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import NewUserGrid from '../users/NewUserGrid'

describe('NewUserGrid',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< NewUserGrid />)
    })
})