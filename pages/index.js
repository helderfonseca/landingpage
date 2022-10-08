import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/icon/logo.svg';

export default function Home() {

  const menu = ['Home', 'About us', 'Blog', 'Contact'];

  return (
    <div>
      <Head>
        <title>Happy Home</title>
        <meta name="description" content="Landing Page - Happy Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full min-h-screen font-sans text-gray-900'>
        
        <header className='px-6 mx-auto max-w-6xl border'>
          <div className='flex justify-between items-center py-10'>
            <Image src={'/icon/logo.svg'} width={100} height={20}/>
            <nav className='flex items-center space-x-10'>
              {menu.map((item, index) => (
                <a key={index} href='#' className='text-gray-700 hover:text-gray-900'>{item}</a>
              ))}
              <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-800'>Try now</a>
            </nav>
          </div>
        </header>

        <section className='px-6 mx-auto max-w-6xl border'>
          <div className='flex'>
            <div className='pt-24 pr-8 w-1/2'>
              <h1 className='text-6xl font-bold font-display'>Learn the best ways for staying productive</h1>
              <p className='pt-8 max-w-md text-xl leading-relaxed'>
                Working at home is definitely a convenient 
                option and makes sense in these unprecedented times.
              </p>
              <div className='flex items-center pt-12 space-x-6'>
                <button>Get Tips</button>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
