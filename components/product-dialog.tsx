"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useProductStore } from "@/lib/store"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import { Label } from "./ui/label"

export default function ProductDialog() {
  const { selectedProduct, setSelectedProduct } = useProductStore()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Reset selected option when dialog opens with a new product
  useEffect(() => {
    if (selectedProduct && selectedProduct.options.length > 0) {
      setSelectedOption(selectedProduct.options[0].id)
    }
  }, [selectedProduct])

  const handleClose = () => {
    setSelectedProduct(null)
    setSelectedOption(null)
  }

  const handleBuyNow = () => {
    const whatsappMessage = encodeURIComponent("Olá, vim pelo site e desejo efetuar uma compra!")
    const whatsappUrl = `https://wa.me/5511975576938?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
  }

  if (!selectedProduct) return null

  return (
    <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl" style={{ color: selectedProduct.color }}>
            {selectedProduct.name}
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-gray-400">Selecione uma das opções disponíveis abaixo:</DialogDescription>

        <div className="space-y-4">
          <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
            {selectedProduct.options.map((option) => (
              <div
                key={option.id}
                className="flex items-center space-x-2 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
              >
                <RadioGroupItem value={option.id} id={option.id} className="text-white" />
                <Label htmlFor={option.id} className="flex flex-1 justify-between items-center cursor-pointer">
                  <div className="font-medium text-white">{option.name}</div>
                  <div className="font-bold" style={{ color: selectedProduct.color }}>
                    R$ {option.price.toFixed(2)}
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>

          <Button
            className="w-full"
            style={{
              backgroundColor: selectedProduct.color,
              color: selectedProduct.color === "#FFFFFF" ? "black" : "white",
            }}
            disabled={!selectedOption}
            onClick={handleBuyNow}
          >
            <Check className="mr-2 h-4 w-4" /> Comprar agora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
