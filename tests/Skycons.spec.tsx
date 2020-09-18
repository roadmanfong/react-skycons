import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Skycons, { SkyconsType } from '../src/Skycons'

it('should render a component', async () => {
  render(<Skycons type={SkyconsType.CLEAR_DAY} />)
  expect(screen.queryByRole('img')).toBeInTheDocument()
})
