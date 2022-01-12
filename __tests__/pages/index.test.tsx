import { rtlRender } from '../utils/'
import Home from '../../pages/index'

it('routes the user to the Unauthenticated app', async () => {
  const { getByText, container } = rtlRender(
    <Home code="oiasdjfoaijwe" frontmatter={{ test: 'test' }} />
  )

  expect(getByText(/welcome/i)).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
