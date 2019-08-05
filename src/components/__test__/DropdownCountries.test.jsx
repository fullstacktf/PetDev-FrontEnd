import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import DropdownCountries from '../forms/DropdownCountries'

describe('DropdownCountries',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< DropdownCountries />)
    })
})