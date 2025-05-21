import { useState } from 'react'
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const createProductSchema = z.object({
  image: z.instanceof(File).refine(file => file.type.startsWith('image/'), {
    message: 'O arquivo deve ser uma imagem',
  }),
  name: z.string().trim().nonempty({ message: 'O campo é obrigatório' }),
  price: z.coerce
    .number()
    .positive({ message: 'O preço deve ser maior que zero' }),
})

type FormData = z.infer<typeof createProductSchema>

export function EditProducts() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(createProductSchema),
  })

  function onCreateProduct(data: FormData) {
    console.log(data)
    form.reset()
    setDrawerOpen(false)
  }

  return (
    <div className="px-4 w-full min-h-screen bg-zinc-100 flex flex-col">
      <Header pageTitle="Produtos" />

      <div className="py-24">
        <p className="text-zinc-700 leading-[150%] mb-6">
          Cadastre, edite ou apague um produto.
        </p>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
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

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onCreateProduct)}
                className="space-y-8"
              >
                <div className="w-full space-y-3 p-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite o nome do produto"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preço</FormLabel>
                        <FormControl>
                          <Input
                            id="price"
                            type="number"
                            className="w-full"
                            placeholder="Digite o valor do produto"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                      <FormItem>
                        <FormLabel htmlFor="image">Selecionar imagem</FormLabel>
                        <FormControl>
                          <Input
                            {...fieldProps}
                            placeholder="Picture"
                            type="file"
                            accept="image/*"
                            onChange={e => {
                              const file = e.target.files?.[0]
                              if (file) {
                                onChange(file)
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <DrawerFooter>
                  <Button type="submit">Cadastrar</Button>
                  <DrawerClose asChild>
                    <Button className="w-full" variant="outline">
                      Cancelar
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </Form>
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
