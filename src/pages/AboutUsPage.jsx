import { Phone, CameraIcon, Music } from 'lucide-react'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-zinc-950 py-20">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className=" mb-16 text-center">
            <span className='text-white/40 text-xs uppercase tracking-widest '>Tentang Perusahaan</span>
            <h1 className='text-white font-black text-4xl uppercase tracking-tight mt-2'>SAY.PERFUME</h1>
            <p className='text-white/60 text-sm leading-relaxed mt-4 max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus pariatur reiciendis architecto esse. Reprehenderit?</p>
          </div>

          {/* Section Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* WhatsApp */}
            <a
              href="https://wa.me/6285184469209"
              target="_blank"
              className="flex flex-col items-center gap-4 bg-zinc-800 rounded-2xl p-8 hover:bg-zinc-700 transition-colors duration-300 cursor-pointer"
            >
              <Phone className="h-10 w-10 text-green-400" />
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">WhatsApp</h3>
              <p className="text-white/50 text-sm">+62-851-8446-9209</p>
            </a>

            {/* Instagram */}
            <a  
              href="https://www.instagram.com/say.perfumee/"
              target="_blank"
              className="flex flex-col items-center gap-4 bg-zinc-800 rounded-2xl p-8 hover:bg-zinc-700 transition-colors duration-300 cursor-pointer"
            >
              <CameraIcon className="h-10 w-10 text-pink-400" />
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">Instagram</h3>
              <p className="text-white/50 text-sm">@sayperfume</p>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@say.perfumee"
              target="_blank"
              className="flex flex-col items-center gap-4 bg-zinc-800 rounded-2xl p-8 hover:bg-zinc-700 transition-colors duration-300 cursor-pointer"
            >
              <Music className="h-10 w-10 text-blue-400" />
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">TikTok</h3>
              <p className="text-white/50 text-sm">@sayperfume</p>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage