import { rtlRender } from '../utils/'
import Home from '../../pages/index'

it('routes the user to the Unauthenticated app', async () => {
  const screen = rtlRender(<Home />)

  expect(screen.getByText(/hello/i)).toBeInTheDocument()
  expect(screen.container).toMatchSnapshot()
})
