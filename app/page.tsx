"use client"

import { Headphones } from "lucide-react"
import Image from "next/image"
import ProductCard from "@/components/product-card"
import ProductDialog from "@/components/product-dialog"
import { products } from "@/lib/data"

export default function Home() {
  const handleSupportClick = () => {
    const whatsappMessage = encodeURIComponent("Olá, vim pelo site e preciso de suporte!")
    const whatsappUrl = `https://wa.me/5511975576938?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-purple-900/40 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex-shrink-0">
            <Image
              src="https://images-ext-1.discordapp.net/external/5u93rjrT5RvArdNezDZFK3yfmmxe_PcmQ2p36b2TG6w/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1331052881171976204/32938fa5476a5265badcfaf5adffe436.png?format=webp&quality=lossless&width=300&height=300"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-center flex-grow">CATÁLOGO</h1>
          <button
            onClick={handleSupportClick}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
            aria-label="Suporte"
          >
            <Headphones className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Emporiumbux LTDA</p>
          <p className="text-gray-400 mb-1">CNPJ: 59.864.257/0001-34</p>
          <p className="text-gray-400 mb-1">emporiumcontatos@gmail.com</p>
          <p className="text-gray-400">(11) 97557-6938</p>
        </div>
      </footer>

      {/* Product Dialog (opens when a product is clicked) */}
      <ProductDialog />
    </div>
  )
}
