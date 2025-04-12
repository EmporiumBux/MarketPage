"use client"

import { create } from "zustand"

type Product = {
  id: string
  name: string
  image: string
  minPrice: number
  maxPrice: number
  label?: "COM GARANTIA" | "MELHOR PLANO" | "SEM ESTOQUE"
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

type ProductStore = {
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}))
