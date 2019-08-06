import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import ProfileMap from '../maps/ProfileMap'

describe('ProfileMap',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< ProfileMap />)
    })
})