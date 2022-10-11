import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react';

export default function Home() {

  const menu = ['Home', 'About us', 'Blog', 'Contact'];
  const features = [
    {
      icon: <Image src={'/icon/briefcase.svg'} width={26} height={26} className='relative'/>,
      title: 'Work-life Balnace',
      description: 
      'Many remote jovs also come with flexible schedules, which means that workers can start and end their day as they choose.',
      color: 'bg-orange'
    },
    {
      icon: <Image src={'/icon/location.svg'} width={26} height={26} className='relative'/>,
      title: 'Work Anywhere',
      description: 
      'Having access to a broader range of job opportunities that aren\' limited by a geographic location. This can be specially helpful.',
      color: 'bg-blue'
    },
    {
      icon: <Image src={'/icon/profile.svg'} width={26} height={26} className='relative' />,
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
      
        <div className='bg-gradient-to-b from-[#FEE6F7] to-white'>

        <Image src={'/blob.svg'} layout='fill'
                 alt=''
                 className='absolute top-0 right-0 pointer-events-none'/>

          <header className='px-6 mx-auto max-w-6xl'>
            <div className='flex justify-between items-center py-6'>
              <Image src={'/icon/logo.svg'} width={100} height={20}/>
              <nav className='hidden md:flex md:items-center md:space-x-10'>
                {menu && menu.map((item, index) => (
                  <a key={index} href='#' className='text-gray-700 hover:text-gray-900'>{item}</a>
                ))}
                <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-800'>Try now</a>
              </nav>
              <button className='p-4 md:hidden'>
                <Image src={'/icon/menu.svg'} width={24} height={24} className='w-6 h-6 text-gray-800'/>
              </button>
            </div>
          </header>

          <section className='px-6 mx-auto max-w-6xl'>
            <div className='flex flex-col-reverse items-center md:flex-row lg:items-end'>
              <div className='pt-24 pr-8 pb-24 text-center md:pb-12 md:w-1/2 w-full md:text-left'>
                <h1 className='text-5xl md:text-6xl font-bold font-display'>
                  Learn the <span className='relative after:content-[url(/scratch.svg)] after:absolute after:-top-2 after:-right-6'>best</span> 
                  ways for staying
                  <span className='relative after:content-[url(/decoration.svg)] after:absolute after:-bottom-2 after:right-8'> productive</span>
                </h1>
                <p className='pt-8 md:max-w-md md:text-xl leading-relaxed'>
                  Working at home is definitely a convenient 
                  option and makes sense in these unprecedented times.
                </p>
                <div className='flex md:justify-start justify-center items-center pt-12 space-x-6'>
                  <button className='py-4 px-8 font-bold tracking-wide leading-7 text-white bg-blue-600 rounded-xl hover:shadow-xl'>Get Tips</button>
                  <button className='flex items-center'>
                    <Image src={'/icon/play-button.svg'} width={50} height={50} className='drop-shadow-lg hover:drop-shadow-xl'/>
                    <span className='pl-4 tracking-wide'>Learn More</span>
                  </button>
                </div>
              </div>
              <div className='flex items-end w-1/2 border-b border-gray-400'>
                  <Image src={'/illustration.svg'} width={622} height={551} alt=""/>
              </div>
            </div>
          </section>
        </div>

        <section className='bg-gray-50'>
          <div className='py-12 px-6 mx-auto max-w-6xl'>
              <div className='flex md:flex-row flex-col gap-5'>
                {
                  features.map((item, index) => (
                    <div key={index} className='flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-300 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl'>
                      <div className='flex items-center space-x-3'>
                        <div className='relative'>
                          <span className={item.color + ' absolute top-0 left-4 w-3 h-3 rounded-full opacity-50'} />
                            {item.icon}
                        </div>
                        <div className='relative'>
                          <span className={`${item.color} absolute right-0 bottom-1 w-12 h-1.5 opacity-60`} />
                          <h2 className='relative text-sm font-display'>{item.title}</h2>
                        </div>
                      </div>
                      <p className='text-sm leading-relaxed text-gray-500'>{item.description}</p>
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
