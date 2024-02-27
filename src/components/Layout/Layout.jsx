 import { Header } from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
 
 export const Layout = () => {
   return (
       <>
       <Header />
       <Suspense fallback={<h1>Loading...</h1>}>
         <Outlet/>
       </Suspense>
       
       </>
   )
 }
 