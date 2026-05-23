import React from 'react'
import useCartStore from '@/store/cartStore'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'


const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCartStore()
  const handleCheckout = () => {
    const nomorWA = '6285184469209'

    const pesanProduk = cartItems.map(item => 
      `- ${item.name} (${item.category}) | ${item.selectedConcentration} | Ukuran: ${item.selectedSize} x${item.quantity}= ${(item.price * item.quantity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}`
    ).join('\n')

    const pesan = `Halo SAY.PERFUME! Saya ingin memesan:\n\n${pesanProduk}\n\nTotal: ${total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}`

    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank')
  }

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <div className='min-h-screen bg-zinc-950 py-20'>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <span className='text-white/40 text-xs uppercase tracking-widest'>Belanja</span>
          <h1 className='text-white font-black text-4xl uppercase tracking-tight mt-2 '>Keranjang</h1>
        </div>

        {/* Isi */}
        {cartItems.length === 0 ? (
          <div className="text-center py-20" >
            <p className='text-white/40 text-sm uppercase tracking-widest'>Keranjang Kamu Masih Kosong</p>
            <Link to={'/products'}>
              <button className={'border border-white text-white uppercase text-xs font-bold tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-200 mt-6 inline-block'}
              >
                Mulai Belanja
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Kolom Kiri - List Produk */}
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div className="flex items-center gap-4 bg-zinc-800 rounded-2xl p-4 mb-4" key={item.name}>
                  {/* Foto */}
                  <img src={item.image} className='h-24 w-24 shrink-0 object-cover rounded-xl' alt={item.name} />

                  {/* Info */}
                  <div className="flex flex-col gap-1 flex-1">
                    <span className='text-white/40 text-xs uppercase tracking-widest'>{item.category}</span>
                    <div className="flex items-center gap-2">
                      <h3 className='text-white font-bold text-lg'>{item.name}</h3>
                      <span className='text-white/40 text-xs uppercase tracking-widest border border-zinc-700 px-2 py-1 rounded-full'>{item.selectedSize}</span>
                      <span className='text-white/40 text-xs uppercase tracking-widest border border-zinc-700 px-2 py-1 rounded-full'>{item.selectedConcentration}</span>
                    </div>
                    <span className='text-white font-black'>{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</span>
                    <span className='text-white/40 text-xs'>{item.quantity}</span>
                  </div>

                  <Button className={'text-white/40 hover:text-red-500 transition-colors duration-200'} onClick={() => removeFromCart(item.id)}>
                    <Trash2 className={'h-5 w-5'} />
                  </Button>
                </div>
              ))}
            </div>

            {/* Kolom Kanan - Total Harga */}
            <div className="md:col-span-1">
              <div className="bg-zinc-800 rounded-2xl p-6 flex flex-col gap-4 sticky top-24">
                <h3 className='text-white font-black text-xl uppercase tracking-widest'>Ringasan</h3>
                <hr className='border-zinc-700' />

                <div className="flex justify-between items-center">
                  <span className='text-white/60 text-sm'>Total</span>
                  <span className='text-white font-black text-xl'>{total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <button onClick={handleCheckout} className='w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-full hover:bg-zinc-200 transition-colors duration-200'>
                    Checkout
                  </button>

                  <button onClick={clearCart} className='w-full border border-zinc-700 text-white/60 font-bold uppercase tracking-widest py-4 rounded-full hover:border-red-500 hover:text-red-500 transition-colors duration-200'>Hapus Semua</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default CartPage