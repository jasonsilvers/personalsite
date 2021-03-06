import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Jason from '../assets/jason.png'
import { tw, apply } from 'twind'

const maxWidthWrapper = apply`max-w-screen-xl mx-auto px-7`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jason C. Silvers</title>
        <meta name="description" content="Blog for Jason C Silvers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={tw`border-1 py-6`}>
        <div className={tw`${maxWidthWrapper}`}>
          <nav className={tw`flex flex-row gap-x-3`}>
            <h1 className={tw`text-2xl pr-10 font-thin `}>Jason C. Silvers</h1>
            <div className={tw`ml-auto flex flex-row gap-x-2`}>
              <a
                title="Link to linkedin profile"
                href="https://www.linkedin.com/in/jasonsilvers"
                className={tw`h-[32px]`}
              >
                <Image src="/Linkedin.svg" alt="linkedin logo" height={32} width={32} />
              </a>
              <a
                title="Link to linkedin profile"
                href="https://www.linkedin.com/in/jasonsilvers"
                className={tw`h-[32px]`}
              >
                <Image src="/Twitter.svg" alt="twitter logo" height={32} width={32} />
              </a>
              <a
                title="Link to Strava profile"
                href="https://www.strava.com/athletes/297175/training/log"
                className={tw`h-[32px]`}
              >
                <Image src="/Strava.svg" alt="Strava logo" height={32} width={32} />
              </a>
              <a
                title="Link to github profile"
                href="https://github.com/jasonsilvers"
                className={tw`h-[32px]`}
              >
                <Image src="/Github.svg" alt="Github logo" height={32} width={32} />
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className={tw`${maxWidthWrapper} pt-6`}>
          <section className={tw`h-[300px] bg-[#F8FAFB] p-8 rounded-2xl flex flex-row`}>
            <div className={tw`flex flex-col gap-y-6`}>
              <h1 className={tw`text-2xl`}>Hello</h1>
              <p>I???m a web developer.</p>
              <p>
                Here, I share my experience and what I am learning about on creating testable,
                flexible, and maintainable software.
              </p>
            </div>
            <div className={tw`ml-auto`}>
              <Image src={Jason} />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
