import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header/header'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
const { pathname } = useLocation();

  useEffect(() => {
    // плавный скролл при смене страницы
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 50);
  }, [pathname]);

  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout