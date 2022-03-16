import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function User() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden"> <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          user
      </div>
    </main>
    

      </div>
    
    </div>
  )
}
