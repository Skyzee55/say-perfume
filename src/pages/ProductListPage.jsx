import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { products } from '@/data/products'
import { Link } from 'react-router-dom'


const ProductListPage = () => {


  const filters = ['semua', 'wanita', 'pria', 'unisex']
  const [activeFilter, setActiveFilter] = useState('semua')

  const filteredProducts = activeFilter === 'semua'
    ? products
    : products.filter(p => p.category === activeFilter)

  console.log(filteredProducts)

  return (
    <div className='min-h-screen bg-zinc-950 py-20'>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <span className='text-white/40 text-xs tracking-widest uppercase'>Koleksi</span>
          <h1 className='text-white font-black text-4xl uppercase tracking-tight mt-2'>Semua Produk</h1>
        </div>

        {/* Filter */}
        <div className="flex gap-3 mb-10">
          {filters.map((filter) => (
            <Button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors duration-200
              ${activeFilter === filter
                ? 'bg-white text-black border-white'
                : 'border-zinc-700 text-white/60 hover:border-white hover:text-white'
              }`}>{filter}</Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} >
              <div className="bg-zinc-800 rounded-2xl overflow-hidden group cursor-pointer hover:bg-zinc-700 transition-colors duration-300 h-full ">

                {/* Foto */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info Produk */}
                <div className="p-5 flex flex-col gap-3">
                  <span className="text-white/40 text-xs uppercase tracking-widest">
                    {product.category}
                  </span>
                  <h3 className="text-white font-bold text-xl">
                    {product.name}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white/40 text-xs">Mulai dari</span>
                    <span className='text-white font-bold'>{product.pricing['30ml']['De Parfum'].toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</span>

                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductListPage