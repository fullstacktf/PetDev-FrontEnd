import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import MiniMap from '../maps/MiniMap'

describe('MiniMap',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< MiniMap />)
    })
})