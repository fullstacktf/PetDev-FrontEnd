import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import MainMap from '../maps/MainMap'

describe('MainMap',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< MainMap />)
    })
})