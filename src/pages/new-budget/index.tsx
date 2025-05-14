import { Button } from '@/components/ui/button'
import { Product } from './product'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Header } from '@/components/header'

export function NewBudget() {
  return (
    <div className="px-4 w-full min-h-screen bg-zinc-100 flex flex-col">
      <Header pageTitle="Novo orçamento" />

      <div className="py-24 flex-auto">
        <p className="text-zinc-700 leading-[150%] mb-6">
          Selecione os produtos a serem incluídos no orçamento.
        </p>

        <div className="flex flex-col">
          <div className="pb-10">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>

          <Drawer>
            <div className="fixed border-t border-t-zinc-300 bg-zinc-100 bottom-0 left-0 right-0 p-4">
              <DrawerTrigger asChild>
                <Button size="lg" className="w-full">
                  Finalizar Orçamento
                </Button>
              </DrawerTrigger>
            </div>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-lg font-medium">
                  Adicionar dados do cliente
                </DrawerTitle>
                <DrawerDescription className="text-base">
                  Deseja incluir os dados do cliente ao orçamento?
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button size="lg" className="w-full">
                  Adicionar dados
                </Button>

                <Button size="lg" className="w-full" variant="outline">
                  Não adicionar
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
}
