import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Skycons, { SkyconsType } from '../src/Skycons'

it('should render a component', async () => {
  render(
    <Skycons type={SkyconsType.CLEAR_DAY} color="red" resizeClear={true} />
  )
  expect(screen.queryByRole('img')).toBeInTheDocument()
})

it('should be able to re-render a component', async () => {
  const { rerender } = render(
    <Skycons
      type={SkyconsType.CLEAR_DAY}
      color="red"
      animate={true}
      size={24}
      resizeClear={true}
    />
  )
  rerender(
    <Skycons
      type={SkyconsType.CLEAR_NIGHT}
      color="blue"
      animate={false}
      size={48}
      resizeClear={false}
    />
  )
  expect(screen.queryByRole('img')).toBeInTheDocument()
})
