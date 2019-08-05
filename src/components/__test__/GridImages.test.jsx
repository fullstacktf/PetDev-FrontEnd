import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import GridImages from '../users/GridImages'

describe('GridImages',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< GridImages />)
    })
})