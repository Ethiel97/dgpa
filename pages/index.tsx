import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <div className="relative lg:absolute h-128 w-full lg:w-1/2 mt-6 px-4">
        <img className="lg:absolute left-0 top-0 lg:-ml-48 w-full h-96 lg:h-128 2xl:h-144 object-cover" src="https://backlog.digitalpublicgoods.net/assets/img/logo.jpg" alt="" />
      </div>


      {/* Header */}
      <div className="container px-4 mx-auto pt-12 lg:pt-16">
        <div className="flex flex-wrap -mx-4 mb-24 lg:mb-32 2xl:mb-40">
          <div className="w-full lg:w-1/2 lg:ml-auto px-4">
            <span className="text-lg text-blue-500 font-bold">Building for everyone</span>
            <h2 className=" my-8 lg:my-12 text-6xl 2xl:text-7xl font-bold font-heading">Digital Public Goods Backlog</h2>
            <p className="mb-20 2xl:mb-24 text-gray-400 text-xl">Promoting digital public goods to create a more equitable world.</p>

            <Link href='/submit'>
              <span className="px-12 py-6 bg-blue-500 hover:bg-blue-600 rounded-full text-lg text-white font-bold transition duration-200">Submit your project</span>
            </Link>
          </div>
        </div>

      </div>



      {/* How it works      <section className="py-20 2xl:py-40 overflow-hidden"> */}
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-5">
            <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
              <div className="max-w-md">
                <span className="text-lg font-bold text-blue-500">How it works</span>
                <h2 className="mt-12 mb-10 text-6xl font-bold font-heading">Willing to contribute to public goods</h2>
                <p className="mb-16 text-xl text-gray-500">It's simple and free</p>
                <a className="inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">How it works?</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-5">
              <ul>
                <li className="flex pb-10 mb-8 border-b border-gray-50">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">1</span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading">Submit your project</h3>
                    <p className="text-lg">You have a project that can contribute to digital public goods? Submit it.</p>
                  </div>
                </li>
                <li className="flex pb-10 mb-8 border-b border-gray-50">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">2</span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading">Review process</h3>
                    <p className="text-lg">We will review your submission with our team.</p>
                  </div>
                </li>
                <li className="flex pb-10 border-b border-gray-50">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">3</span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading">Feedback</h3>
                    <p className="text-lg">After review we'll get back to you and showcase it here if it's a good fit for us.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/*cta  submit your project now */}


      <section className="relative py-20 2xl:py-40 overflow-hidden">
        <img className="lg:absolute bottom-0 left-0 mx-auto h-80 w-[384px] lg:w-auto lg:h-112 2xl:h-144 object-cover" style={{ width: 384 }}
          src="https://images.pexels.com/photos/5999935/pexels-photo-5999935.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=630;w=384" alt="" />
        <img className="hidden lg:block absolute bottom-0 right-0 h-64 2xl:h-96 object-cover"
          src="https://images.pexels.com/photos/5325762/pexels-photo-5325762.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=650" alt="" />
        <div className="container px-4 mx-auto pt-20">
          <div className="max-w-lg 2xl:max-w-3xl mx-auto text-center">
            <h2 className="my-8 text-6xl 2xl:text-7xl font-bold font-heading">Excited to see your contribution.</h2>
            <p className="mb-14 text-lg text-gray-500">Contribute with your project.</p>

            <Link href="/submit">
              <span className="inline-block py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Submit your project</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
