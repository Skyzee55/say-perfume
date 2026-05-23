import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Menu, ShoppingCart, X } from 'lucide-react'
import useCartStore from '@/store/cartStore'


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const { cartItems } = useCartStore()

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    const navLinks = [
        { name: "Home", path: '/' },
        { name: "Product", path: '/products' },
        { name: "About Us", path: '/aboutus' },
    ]

    return (
        <header className='sticky top-0 z-50 w-full bg-zinc-900 border-b border-zinc-700'>
            <div className="container mx-auto flex items-center justify-between h-16 px-6">
                {/* Logo Sebelah Kiri */}
                <div className="flex items-center gap-3">
                    <Link to={'/'} className='flex items-center gap-3'>
                        <img src="/src/assets/its_logo.png" className='h-8 w-8 object-cover rounded-sm' alt="" />
                        <span className='text-white font-black tracking-widest uppercase text-lg'>SAY.PERFUME</span>
                    </Link>
                </div>

                <nav className='hidden md:flex items-center justify-center flex-1'>
                    <ul className='flex items-center gap-8'>
                        {navLinks.map((link) => (
                            <li key={link.name} >
                                <Link to={link.path} className='text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-200'>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <Link to={'/cart'}>
                        <Button size='icon' className={'border-zinc-700 cursor-pointer text-white hover:bg-white hover:text-black transition-colors duration-200 relative'}>
                            <ShoppingCart className="h-5 w-5" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Button>
                    </Link>

                    <Button variant='ghost' size='icon' className={'md:hidden text-white hover:bg-zinc-800'} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (<X className='h-5 w-5' />) : (<Menu className='size-5' />)}
                    </Button>
                </div>

            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-zinc-900 border-t border-zinc-700 px-6 py-4">
                    <ul className="flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-white/60 hover:text-white uppercase text-xs font-bold tracking-widest py-3 border-b border-zinc-800"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar