import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div>
      <header className="header">
    <div className="container">
      <a href="#" className="logo">
   
      <Image src="/logo.jpg" alt='hero' className='logo' width={1000} height={1000}/>
        <span className="logo-text">Hamza</span>
      </a>
      <nav className="nav-links">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/About" className="nav-link">About</Link>
        <Link href="/Contact" className="nav-link">Contact</Link>
        <Link href="#" className="nav-link">Privacy Policy</Link>
      </nav>
      <button className="button">
        Sign Up
      </button>
    </div>
  </header>
    </div>
  )
}
