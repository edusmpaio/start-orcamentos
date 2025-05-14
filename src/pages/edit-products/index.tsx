import { Plus } from 'lucide-react'
import { Product } from './product'
import { Header } from '@/components/header'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { z } from 'zod'

const createProductSchema = z.object({
  image: z.instanceof(File).refine(file => file.type.startsWith('image/'), {
    message: 'O arquivo deve ser uma imagem',
  }),
  name: z.string().trim().nonempty({ message: 'O campo é obrigatório' }),
  price: z
    .string()
    .transform(val => val.replace(/\s/g, '').replace(',', '.'))
    .refine(val => !Number.isNaN(Number(val)), { message: 'Preço inválido' })
    .transform(Number)
    .refine(val => val > 0, { message: 'O preço deve ser maior que zero' }),
})

export function EditProducts() {
  return (
    <div className="px-4 w-full min-h-screen bg-zinc-100 flex flex-col">
      <Header pageTitle="Produtos" />

      <div className="py-24">
        <p className="text-zinc-700 leading-[150%] mb-6">
          Cadastre, edite ou apague um produto.
        </p>

        <Drawer>
          <DrawerTrigger asChild>
            <button
              type="button"
              className="flex items-center flex-col w-full bg-zinc-100 py-5 cursor-pointer rounded-md mb-8 border-1 border-dashed border-zinc-400 gap-2 hover:bg-zinc-200/30"
            >
              <div className="p-2.5 bg-zinc-200 rounded-full">
                <Plus className="text-zinc-500 size-5" strokeWidth={2.5} />
              </div>

              <span className="leading-[150%] font-medium text-zinc-800 text-sm">
                Criar novo produto
              </span>
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Cadastrar novo produto</DrawerTitle>
            </DrawerHeader>

            <form className="w-full space-y-3 mb-4 p-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="image">Selecione uma foto</Label>
                <Input className="w-full" id="image" type="file" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input
                  className="w-full"
                  id="name"
                  placeholder="Digite o nome do produto"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  className="w-full"
                  placeholder="Digite o valor do produto"
                />
              </div>
            </form>

            <DrawerFooter>
              <Button>Cadastrar</Button>
              <DrawerClose>
                <Button className="w-full" variant="outline">
                  Cancelar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <div>
          <p className="text-lg font-medium mb-6">Produtos cadastrados</p>

          <div>
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  )
}
