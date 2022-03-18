import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Link } from 'react-router-dom';


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden"> <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className='flex mr-3'>
       
<button>
<a href='https://github.com/sonyfebrian/react-redux'>Source Code</a>
  </button>
        </div>
    
   
    
      </div>
    </main>
    

      </div>
    
    </div>
  )
}
