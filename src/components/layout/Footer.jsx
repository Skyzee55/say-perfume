import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const navLinks = [
    { name: "Home", path: '/' },
    { name: "Product", path: '/products' },
    { name: "About Us", path: '/aboutus' },
  ]
  return (
    <footer className='bg-zinc-900 border-t border-zinc-700 w-full'>
      <div className="container mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <span className='text-white font-black tracking-widest uppercase'>SAY.PERFUME</span>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center">
          <h4 className='text-white font-bold uppercase tracking-widest text-xs mb-4'>Menu</h4>
          <ul className='flex flex-row gap-6'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-white/60 hover:text-white text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
            Kontak
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="text-white/60 text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Jl. Aromaterapi No. 88, Jakarta</span>
            </li>
            <li className="text-white/60 text-sm flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+62 812 3456 7890</span>
            </li>
            <li className="text-white/60 text-sm flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@sayperfume.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-zinc-700 mt-8 pt-6 text-center">
        <p className='text-white/40 text-xs tracking-widest'>© 2025 SAY.PERFUME. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer