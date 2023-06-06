import React from 'react'
import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import { Navbar, Button, FAQuestion, Header, Loading, Testamonials } from '../Components'
import '@testing-library/jest-dom'

describe('Navbar component', () => {
    test('Renders the Navbar component without crashing', () => {
        render(<Navbar />)
    })
})

describe('Button component', () => {
    test('Renders the Button component without crashing', () => {
        render(<Button />)
    })
})

describe('FAQuestion component', () => {
    test('Renders the FAQuestion component without crashing and toggles svg/answer', () => {
        render(<FAQuestion />)

        const button = screen.getByRole('button')

        const plus = screen.getByTestId('plus')
        const minus = screen.getByTestId('minus')
        const answer = screen.getByTestId('answer')

        expect(plus).toBeVisible()
        expect(minus).not.toBeVisible()
        expect(answer).not.toBeVisible()

        fireEvent.click(button)

        expect(plus).not.toBeVisible()
        expect(minus).toBeVisible()
        expect(answer).toBeVisible()

        fireEvent.click(button)

        expect(plus).toBeVisible()
        expect(minus).not.toBeVisible()
        expect(answer).not.toBeVisible()
    })
})

describe('Header component', () => {
    test('Renders the Header component without crashing', () => {
        render(<Header />)
    })
})

describe('Loading component', () => {
    test('Renders the Loading component without crashing', () => {
        render(<Loading />)
    })
})

describe('Testamonials component', () => {
    test('Renders the Testamonials component without crashing', () => {
        render(<Testamonials />)
    })
})