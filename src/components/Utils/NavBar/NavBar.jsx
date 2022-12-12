import { Link } from "react-router-dom"

// const NavBar = () => {
//     return(
//       <>
//         <ul>
//           <li>Order</li>
//           <li><Link to='/login' >Login</Link></li>
//           <li><Link to='/register'>Register</Link></li>
//         </ul>
//       </>
//     )
//   }
  
//   export default NavBar

import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"

const NavBar = ({handleLogOut, handleCreate}) => {
  const [Menu, setMenu] = useState(false)

  // Set menu
  const manageMenu = () => Menu ? setMenu(false) : setMenu(true)

  return (
    <>

      <nav className=" px-2 sm:px-4 py-2.5 bg-red-500 shadow-xl fixed w-screen">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to='/' ><span className="flex items-center">
            <span className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">Henry's Foods</span>
          </span></Link>
          {!Menu ?
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-900  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900  dark:bg-gray-800 md:dark:bg-red-500 dark:border-gray-700">
                <li>
                <button onClick={() => handleLogOut()} className="block py-2 pl-3 pr-4 text-white rounded mr-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >LOGOUT</button>
                </li>
                <li>
                <button onClick={() => handleCreate()} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >CREATE</button>
                </li>
              </ul>
            </div>
            :
            <div className="items-center justify-between block w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..." />
              </div>
              <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-900  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900  dark:bg-red-800 md:dark:bg-red-500 dark:border-red-700 mb-2">
                {/* <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pedir en Local</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pedir Delivey</a>
                </li> */}
                <li>
                <button onClick={() => handleLogOut()} className="block w-full text-left py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</button>
                </li>
              </ul>
            </div>
          }
          <div className="flex md:order-2">
            <SearchBar manageMenu={manageMenu}/>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-200 text-white dark:hover:bg-gray-700 dark:focus:ring-red-900" aria-controls="navbar-search" aria-expanded="false" onClick={() => Menu ? setMenu(false) : setMenu(true)}>
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>

        </div>
      </nav>


    </>
  )
}

export default NavBar