import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import FooterFanimals from '../shared/FooterFanimals'

describe('FooterFanimals',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< FooterFanimals />)
    })
})