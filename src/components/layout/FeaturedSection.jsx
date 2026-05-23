import React from 'react'
import { products } from '@/data/products'
import { Link } from 'react-router-dom'

const FeaturedSection = () => {

    return (
        <section className='w-full bg-zinc-900 pt-20 pb-24'>
            <div className="container mx-auto px-6">
                {/* Heading Seccion */}
                <div className="text-center mb-12">
                    <span className='text-white/40 text-xs tracking-widest uppercase'>Pilihan Terbaik</span>
                    <h2 className=' text-white font-black text-4xl uppercase tracking-tight mt-2'>Produk Unggulan</h2>
                </div>

                {/* Grid Product  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.slice(0, 3).map((product) => (
                       <Link to={`/product/${product.id}`} key={product.id}>
                         <div className="bg-zinc-800rounded-2xl overflow-hidden group cursor-pointer border border-gray-500 rounded-lg">
                            {/* Foto */}
                            <div className="relative h-[280px] overflow-hidden">
                                <img src={product.image} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            </div>

                            {/* Info */}
                            <div className="p-4 flex flex-col gap-2">
                                <span className=' text-white/40 text-xs uppercase tracking-widest'>{product.category}</span>
                                <h3 className='text-white font-bold text-lg'>{product.name}</h3>
                                <p className='text-white font-black text-xl'>{product.pricing['30ml']['De Parfum'].toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</p>
                            </div>

                            
                        </div>
                       </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/products">
                        <button className="border-white cursor-pointer rounded-lg ring-1 ring-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest px-10 py-6 transition-colors duration-200">
                            Lihat Semua Product
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection