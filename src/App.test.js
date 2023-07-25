import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Test the App', () => {
    test('Render App', () => {
        render(<App />)
    })
})
