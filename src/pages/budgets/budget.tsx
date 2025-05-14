import { Button } from '@/components/ui/button'
import { ClipboardList, Pencil, Send } from 'lucide-react'

export function Budget() {
  return (
    <div className="flex items-center justify-between not-first-of-type:border-t border-t-zinc-300 not-first-of-type:pt-5 not-first-of-type:mt-5">
      <div className="flex items-center gap-4">
        <ClipboardList className="text-zinc-900 size-6" />

        <div className="flex flex-col">
          <span className="leading-[150%] text-base font-medium text-zinc-900">
            Pedido: ST-FQ3L
          </span>
          <span className="leading-[150%] text-sm text-zinc-700">
            Total: R$ 50,00
          </span>
        </div>
      </div>

      <div className="space-x-1">
        <Button className="size-10" variant="ghost">
          <Pencil className="size-5 text-zinc-600" />
        </Button>

        <Button className="size-10" variant="ghost">
          <Send className="size-5 text-zinc-600" />
        </Button>
      </div>
    </div>
  )
}
