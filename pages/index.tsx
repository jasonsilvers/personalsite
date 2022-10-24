import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Jason from '../assets/jason.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jason C. Silvers</title>
        <meta name="description" content="Blog for Jason C Silvers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={`h-[300px] bg-[#F8FAFB] p-8 rounded-2xl flex flex-row`}>
        <div className={`flex flex-col gap-y-6 font-thin`}>
          <h1 className={`text-3xl`}>Hello</h1>
          <p>I’m a web developer.</p>
        </div>
        <div className={`ml-auto`}>
          <Image alt="Home page profile image" height="350px" width="400px" src={Jason} />
        </div>
      </section>
    </div>
  )
}

export default Home
