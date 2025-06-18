import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Jacob Hall's Portfolio
        </div>

        {/* Hamburger button for mobile users*/}
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/project" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
