
//import link from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="flex py-8 px-4 lg:px-8 justify-between items-center">

                    <Link href='/'>
                        <span className="text-2xl text-gray-900 font-bold" href="/">
                            DGPA
                        </span>
                    </Link>

                    <div className="lg:hidden ml-auto">
                        <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 text-gray-900 rounded">
                            <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="39" height="2" rx="1" fill="currentColor"></rect><rect x="19" y="11" width="20" height="2" rx="1" fill="currentColor"></rect>
                                <title>Mobile menu</title>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:block ml-auto mr-16">
                        <ul className="flex items-center space-x-16 text-lg font-bold">
                            <li><Link className="hover:underline" href="/projects">Projects</Link></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <Link href='/submit'>
                            <span className="inline-block px-12 py-4 text-white font-bold bg-black border border-black hover:bg-white hover:text-black rounded-full transition duration-200">Submit now</span>

                        </Link>
                    </div>
                </div>

                <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 hidden">
                    <div className="navbar-backdrop fixed inset-0 bg-blue-600 opacity-80"></div>
                    <nav className="relative flex flex-col py-8 w-full h-full bg-gray-800 overflow-y-auto">
                        <div className="flex items-center mb-16 pr-6">
                            <a className="ml-10 mr-auto text-2xl text-white font-bold" href="/">
                                <span>DGPA</span>
                            </a>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1 px-10"><Link className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="/projects">Projects</Link></li>
                                <li className="mb-1 px-10"><Link className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl" href="/submit">New project</Link></li>
                            </ul>
                        </div>
                        <div className="mt-auto px-10">
                            <div className="pt-6">
                                <Link className="block mb-4 py-4 px-12 text-white text-center font-bold hover:bg-white hover:text-gray-800 border border-gray-50 rounded-full transition duration-200" href="#">Sign in</Link>

                                <Link href='/submit'>
                                    <span className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
                                        Sign up
                                    </span>
                                </Link>

                            </div>
                            <p className="mt-6 mb-4 text-lg text-center text-white">
                                <span>{new Date().getFullYear()} © DGPA. All rights reserved.</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
