import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

test('renders among us', () => {
    render(<App/>)
    const linkElement = screen.getByText(/among us/i)
    expect(linkElement).toBeInTheDocument()
})
