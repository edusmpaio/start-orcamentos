import { useState } from 'react'
import { NumberInput } from '@/components/number-input'

export function Product() {
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="flex items-center justify-between not-first-of-type:border-t border-t-zinc-200 not-first-of-type:pt-5 not-first-of-type:mt-5">
      <div className="flex items-center gap-4">
        <div className="size-16 bg-zinc-500 rounded-md" />

        <div className="flex flex-col">
          <span className="leading-[150%] text-base font-medium text-zinc-900">
            Nome do Produto
          </span>
          <span className="leading-[150%] text-sm text-zinc-700">R$ 50,00</span>
        </div>
      </div>

      <NumberInput value={quantity} min={0} onChange={setQuantity} />
    </div>
  )
}
