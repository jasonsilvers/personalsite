import { rtlRender } from '../utils/'
import Home from '../../pages/index'

it('routes the user to the Unauthenticated app', async () => {
  const { getByText, container } = rtlRender(<Home />)

  expect(getByText(/jason/i)).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
