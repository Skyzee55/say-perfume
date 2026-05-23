import CategorySection from '@/components/layout/CategorySection'
import FeaturedSection from '@/components/layout/FeaturedSection'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section className='w-full min-h-screen bg-zinc-900 flex items-center'>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Sebelah Kiri */}
          <div className=''>
            <span className='text-white/50 text-xs tracking-widest uppercase'>NEW COLLECTION 2025</span>
            <h1 className='text-white font-black text-5xl uppercase tracking-tight leading-tight mt-4'>Temukan Aroma Khas Anda</h1>
            <p className='text-white/60 text-sm mt-4 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores vitae, excepturi consequatur repellat temporibus.</p>

            <Link to={'/products'}>
              <Button variant='default' size='lg' className={'mt-8 bg-white text-black cursor-pointer font-bold tracking-widest uppercase text-xs px-8 py-6 hover:bg-zinc-200 transition-colors duration-200'}>Shop Now</Button>
            </Link>

          </div>

          {/* Image */}
          <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
            <img src="https://plus.unsplash.com/premium_photo-1738860331028-9103e025522d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcmZ1bWUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D" className='w-full h-full object-cover rounded-2xl' alt="" />
          </div>

        </div>
      </section>

      <CategorySection />

      <FeaturedSection />
    </>
  )
}

export default HomePage