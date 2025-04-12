"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useProductStore } from "@/lib/store"
import { Check, Zap } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  product: {
    id: string
    name: string
    image: string
    minPrice: number
    maxPrice: number
    label?: string
    autoDelivery?: boolean
    support?: boolean
    color: string
    options: Array<{
      id: string
      name: string
      price: number
      description?: string
    }>
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, image, minPrice, maxPrice, label, autoDelivery, support, color } = product
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct)

  const isOutOfStock = label === "SEM ESTOQUE"

  const glowStyles = {
    boxShadow: `0 0 20px 0 ${color}20`,
    borderColor: `${color}30`,
  }

  return (
    <Card
      className="bg-gray-900/50 border rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
      style={glowStyles}
      onClick={() => setSelectedProduct(product)}
    >
      <div className="relative h-40 w-full">
        <div className="absolute inset-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

        {label && (
          <Badge
            className={`absolute top-3 right-3 font-semibold ${
              label.includes("OFF")
                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                : label === "COM GARANTIA"
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {label}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2" style={{ color }}>
          {name}
        </h2>
        <div className="text-gray-300 font-medium">
          {isOutOfStock ? (
            <span className="text-red-400">Indisponível</span>
          ) : (
            <span>
              R$ {minPrice.toFixed(2)} – R$ {maxPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex gap-2">
          {autoDelivery && (
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Zap className="h-3 w-3 text-yellow-500" />
              <span>Entrega veloz</span>
            </div>
          )}
          {support && (
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Check className="h-3 w-3 text-green-500" />
              <span>Suporte</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
