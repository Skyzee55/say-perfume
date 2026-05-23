import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import useCartStore from '@/store/cartStore'

const ProductDetailPage = () => {

  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addToCart } = useCartStore()

  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedConcentration, setSelectedConcentration] = useState(null)

  const currentPrice = selectedSize && selectedConcentration
    ? product.pricing[selectedSize][selectedConcentration]
    : null

  const handleCheckout = () => {
    if (!selectedSize) {
      alert('Pilih ukuran dulu!')
      return
    }
    if (!selectedConcentration) {
      alert('Pilih concentration dulu!')
      return
    }
    
    const nomorWA = '6285184469209'
    const pesan = `Halo SAY.PERFUME! Saya ingin memesan:\n\n- ${product.name} (${product.category}) | ${selectedConcentration} | Ukuran: ${selectedSize} x1 = ${currentPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}\n\nTotal: ${currentPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}`
    
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank')
  }
  return (
    <div className='min-h-screen bg-zinc-950 py-20'>
      <div className="container  mx-auto px-6">

        <Link to={'/products'} className='flex items-center gap-2 text-white/50 hover:text-white text-sm uppercase tracking-widest mb-10 transition-colors duration-200'>
          <ArrowLeft className='h-4 w-4' />
          <span>Kembali</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <img src={product.image} className='w-full h-full object-cover' alt={product.name} />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <span className='text-white/40 text-xs uppercase tracking-widest'>{product.category}</span>
            <h1 className='text-white font-black text-5xl uppercase tracking-tight'>{product.name}</h1>
            <p className='text-white/60 text-sm leading-relaxed'>{product.description}</p>

            <div className="flex flex-col gap-2">
              <span className='text-white/40 text-xs uppercase tracking-widest'>Notes</span>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note) => (
                  <span key={note} className='bg-zinc-800 text-white/70 text-xs px-3 py-1 rounded-full'>
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className='text-white/40 text-xs uppercase tracking-widest'>Size</span>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full cursor-pointer text-xs font-bold uppercase tracking-widest transition-colors duration-200
                        ${selectedSize === size
                        ? 'bg-white text-black'
                        : 'border border-zinc-700 text-white/60 hover:border-white hover:text-white'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className='text-white/40 text-xs uppercase tracking-widest'>Concentration</span>
              <div className="flex gap-3">
                {product.concentration.map((concentration) => (
                  <button
                    key={concentration}
                    onClick={() => setSelectedConcentration(concentration)}
                    className={`px-4 py-2 rounded-full cursor-pointer text-xs font-bold uppercase tracking-widest transition-colors duration-200
                        ${selectedConcentration === concentration
                        ? 'bg-white text-black'
                        : 'border border-zinc-700 text-white/60 hover:border-white hover:text-white'
                      }`}
                  >
                    {concentration}
                  </button>
                ))}
              </div>
            </div>
            <span className='text-white font-black text-3xl'>
              {currentPrice
                ? currentPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
                : 'Pilih Ukuran & Concentration'
              }
            </span>

            <Button onClick={() => {
              if (!selectedSize) {
                alert('Pilih ukuran dulu!')
                return
              }
              if (!selectedConcentration) {
                alert('Pilih concentration dulu!')
                return
              }
              addToCart({ ...product, selectedSize, selectedConcentration, price: currentPrice })
            }} className={'bg-white text-black font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors duration-200 w-full mt-4'}>
              Tambah ke Keranjang
            </Button>

            <Button className={'w-full border border-white text-white font-bold uppercase tracking-widest py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-200'} 
            onClick={handleCheckout} >
              CheckOut
            </Button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductDetailPage