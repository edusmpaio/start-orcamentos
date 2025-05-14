import { Button } from '@/components/ui/button'
import { Pencil, Trash2 } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export function Product() {
  return (
    <div className="flex items-center justify-between not-first-of-type:border-t border-t-zinc-300 not-first-of-type:pt-5 not-first-of-type:mt-5">
      <div className="flex items-center gap-4">
        <div className="size-16 bg-zinc-500 rounded-md" />

        <div className="flex flex-col">
          <span className="leading-[150%] text-base font-medium text-zinc-900">
            Nome do Produto
          </span>
          <span className="leading-[150%] text-sm text-zinc-700">R$ 50,00</span>
        </div>
      </div>

      <div className="space-x-1">
        <Button className="size-10" variant="ghost">
          <Pencil className="size-5 text-zinc-600" />
        </Button>

        <Button className="size-10" variant="ghost">
          <Trash2 className="size-5 text-zinc-600" />
        </Button>
      </div>
    </div>
  )
}
