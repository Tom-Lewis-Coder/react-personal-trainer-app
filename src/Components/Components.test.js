import React from 'react'
import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import { Navbar, Button, FAQuestion, Header, Loading, Testamonials, Video } from '../Components'
import '@testing-library/jest-dom'

describe('Navbar component', () => {
    test('Renders the Navbar component without crashing and drop down menu functionality', () => {
        render(<Navbar />)

        expect(screen.getAllByRole('link')).toBeTruthy()

        const menuDrop = screen.getByTestId('menuDrop')

        expect(menuDrop).toBeVisible()

        fireEvent.click(menuDrop)

        const menuUp = screen.getByTestId('menuUp')
        const menu = screen.getByTestId('menu')

        expect(menuUp).toBeVisible()
        expect(menu).toBeVisible()

        fireEvent.click(menuUp)

        expect(menuDrop).toBeVisible()
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

        const content = screen.getByRole('content')
        const name = screen.getByRole('name')
        const starsArr = screen.getByRole('starsArr')

        expect(content).toBeVisible()
        expect(name).toBeVisible()
        expect(starsArr).toBeVisible()
    })
})
