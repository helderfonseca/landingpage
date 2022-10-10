import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react';

export default function Home() {

  const menu = ['Home', 'About us', 'Blog', 'Contact'];
  const features = [
    {
      icon: <Image src={'/briefcase.svg'} width={26} height={26}/>,
      title: 'Work-life Balnace',
      description: 
      'Many remote jovs also come with flexible schedules, which means that workers can start and end their day as they choose.',
      color: 'bg-orange'
    },
    {
      icon: <Image src={'/location.svg'} width={26} height={26}/>,
      title: 'Work Anywhere',
      description: 
      'Having access to a broader range of job opportunities that aren\' limited by a geographic location. This can be specially helpful.',
      color: 'bg-blue'
    },
    {
      icon: <Image src={'location.svg'} width={26} height={26}/>,
      title: 'Improved Inclusivity',
      description: 
      'Remote work enables companies to embrace diversity and inclusion by hiring people from different backgrounds.',
      color: 'bg-pink'
    }
  ];

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
              {menu && menu.map((item, index) => (
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
                <button className='py-4 px-8 font-bold tracking-wide leading-7 text-white bg-blue-600 rounded-xl hover:shadow-xl'>Get Tips</button>
                <button className='flex items-center'>
                  <Image src={'/icon/play-button.svg'} width={50} height={50} className='drop-shadow-lg hover:drop-shadow-xl'/>
                  <span className='pl-4 tracking-wide'>Learn More</span>
                </button>
              </div>
            </div>
            <div className='w-1/2'>
                <Image src={'/illustration.svg'} width={622} height={551}/>
            </div>
          </div>
        </section>

        <section className='bg-gray-50'>
          <div className='py-12 px-6 mx-auto max-w-6xl'>
              <div className='flex'>
                {
                  features.map((item, index) => (
                    <div key={index} className='flex'>
                      <div className='flex items-center space-x-3'>
                        <div className='relative'>
                          <span className='{item.color} absolute top-0 left-4 w-3 h-3 rounded-full opacity-50'
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
          </div>
        </section>

      </main>

      
    </div>
  )
}
