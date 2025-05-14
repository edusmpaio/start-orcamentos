import { Button } from './components/ui/button'
import { CirclePlus, NotepadText, Pencil } from 'lucide-react'
import { NavLink } from 'react-router'

export function App() {
  return (
    <div className="px-4 w-full min-h-screen bg-zinc-100 flex flex-col items-center justify-center gap-8">
      <div className="space-y-2">
        <h1 className="text-2xl leading-[130%] font-medium text-center">
          O que você deseja fazer?
        </h1>
        <p className="text-zinc-700 text-center leading-[150%]">
          Selecione uma das opções abaixo.
        </p>
      </div>

      <div className="flex w-full flex-col gap-4">
        <NavLink to="/new-budget">
          <Button size="lg" className="w-full">
            <CirclePlus className="size-5" /> Criar orçamento
          </Button>
        </NavLink>
        <NavLink to="/edit-products">
          <Button size="lg" variant="outline" className="w-full">
            <Pencil className="size-5" />
            Gerenciar produtos
          </Button>
        </NavLink>
        <NavLink to="/budgets">
          <Button size="lg" variant="outline" className="w-full">
            <NotepadText className="size-5" />
            Visualizar orçamentos
          </Button>
        </NavLink>
      </div>
    </div>
  )
}
