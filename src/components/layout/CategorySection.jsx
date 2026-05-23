import React from 'react'

const CategorySection = () => {
    return (
        <section className='w-full bg-zinc-950 py-20'>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className='text-white/40 text-xs tracking-widest uppercase'>Koleksi Kami</span>
                    <h2 className='text-white font-black text-4xl uppercase tracking-tight mt-2'>Shop By Category</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="relative overflow-hidden rounded-2xl cursor-pointer group h-[400px]">

                        {/* Foto */}
                        <img
                            src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800"
                            alt="Wanita"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay gelap + teks */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                            <h3 className="text-white font-black text-2xl uppercase tracking-widest">
                                Wanita
                            </h3>
                        </div>

                    </div>
                    <div className="relative overflow-hidden rounded-2xl cursor-pointer group h-[400px]">

                        {/* Foto */}
                        <img
                            src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800"
                            alt="Pria"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay gelap + teks */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                            <h3 className="text-white font-black text-2xl uppercase tracking-widest">
                                Pria
                            </h3>
                        </div>

                    </div>
                    <div className="relative overflow-hidden rounded-2xl cursor-pointer group h-[400px]">

                        {/* Foto */}
                        <img
                            src="https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800"
                            alt="Unisex"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay gelap + teks */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                            <h3 className="text-white font-black text-2xl uppercase tracking-widest">
                                Unisex
                            </h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySection