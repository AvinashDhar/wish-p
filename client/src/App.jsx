import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, wishLogo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/" className='flex  items-center'>
        <img src={wishLogo} alt="logo" className="w-28 object-contain" style={{height:"45px", width:"45px"}}/>
        {/* <span style={{marginLeft:'5px',color:'#5c5e8d',fontWeight:'500'}}>Wish P</span> */}
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
