import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const header = document.getElementsByClassName('App-link')
  let inHeader = header.innerText
  const eader = screen.getByText('Learn React')
  expect(eader).toBeInTheDocument()
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
