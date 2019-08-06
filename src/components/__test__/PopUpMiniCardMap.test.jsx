import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import PopUpMiniCardMap from '../users/PopUpMiniCardMap'

describe('PopUpMiniCardMap',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< PopUpMiniCardMap />)
    })
})