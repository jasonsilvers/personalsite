import '@testing-library/jest-dom/extend-expect'
import { configure } from '@testing-library/react'

// speeds up *ByRole queries a bit
// https://github.com/testing-library/dom-testing-library/issues/552
configure({ defaultHidden: true })

//Remove to show console messages in tests
global.console = {
  ...console,
  // log: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn()
}

afterEach(() => {
  jest.clearAllMocks()
})
