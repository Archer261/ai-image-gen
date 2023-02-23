import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages'
import { logo } from './assets'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logo} className="w-16 h-auto rounded-full" alt='Home' />
        </Link>
        <Link to='/create-post' className='font-inter font-medium px-4 py-2 rounded-md shadow-md hover:shadow-sm hover:transition-shadow text-white bg-[#16a34a] hover:scale-105 transition-transform'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)] '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App