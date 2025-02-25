import { render, screen } from '@testing-library/react'
import Ping from './ping'
import { expect } from 'chai'

test('should contain an input and button', () => {
  render(<Ping />)

  // Check if the input with placeholder "Put your name" exists
  expect(screen.getByText('FULL NAME')).toBeInTheDocument()
  expect(screen.getByText('EMAIL ACOUNT')).toBeInTheDocument()
  expect(screen.getByText('DATE OF BIRTH')).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Put your name/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Put your email/i)).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText(/Put your date of birth/i)
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
})
test('should submit data', () => {
  render(<Ping />)
  expect()
})
