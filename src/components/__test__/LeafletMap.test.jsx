import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import LeafletMap from '../maps/LeafletMap'

describe('LeafletMap',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< LeafletMap />)
    })
})