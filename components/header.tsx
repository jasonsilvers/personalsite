import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const LINKS = [
  { name: 'Home', to: '/' },
  { name: 'Blog', to: '/blog' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Libraries', to: '/libraries' }
]

const NavLink = ({ to, name }: { to: string; name: string }) => {
  const router = useRouter()

  const isSelected = router.asPath === to

  return (
    <li className={`px-5`}>
      <Link href={to}>
        <a
          className={`text-lg focus:outline-none block whitespace-nowrap font-medium hover:text-gray-700`}
        >
          {name}
        </a>
      </Link>
    </li>
  )
}

export const Header = () => {
  return (
    <header className={`border py-6`}>
      <div className={`max-w-screen-xl mx-auto px-7`}>
        <nav className={`flex flex-row gap-x-3`}>
          <h1 className={`text-2xl pr-10 font-thin`}>Jason C. Silvers</h1>

          <div className={`ml-auto flex flex-row gap-x-2`}>
            <a
              title="Link to linkedin profile"
              href="https://www.linkedin.com/in/jasonsilvers"
              className={`h-[32px]`}
            >
              <Image src="/Linkedin.svg" alt="linkedin logo" height={32} width={32} />
            </a>
            <a
              title="Link to Strava profile"
              href="https://www.strava.com/athletes/297175/training/log"
              className={`h-[32px]`}
            >
              <Image src="/Strava.svg" alt="Strava logo" height={32} width={32} />
            </a>
            <a
              title="Link to github profile"
              href="https://github.com/jasonsilvers"
              className={`h-[32px]`}
            >
              <Image src="/Github.svg" alt="Github logo" height={32} width={32} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
