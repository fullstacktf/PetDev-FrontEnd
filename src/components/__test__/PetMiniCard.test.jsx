import React from 'react';
import { render, cleanup } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect'
import PetMiniCard from '../users/PetMiniCard'

describe('PetMiniCard',()=>{
    afterEach(cleanup)
    test('Checks render component', () => {
        render(< PetMiniCard />)
    })
})