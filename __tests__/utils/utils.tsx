import { render as rtlRender, waitForElementToBeRemoved, screen } from '@testing-library/react'

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByLabelText(/loading/i),
      ...screen.queryAllByText(/loading/i),
      ...screen.queryAllByRole('progressbar')
    ],
    {
      timeout: 4000
    }
  )

export * from '@testing-library/react'
// override React Testing Library's render with our own
export { rtlRender }
