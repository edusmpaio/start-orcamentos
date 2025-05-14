import { Header } from '@/components/header'
import { Budget } from './budget'

export function Budgets() {
  return (
    <div className="px-4 w-full min-h-screen bg-zinc-100 flex flex-col">
      <Header pageTitle="Orçamentos" />

      <div className="py-24">
        <p className="text-zinc-700 leading-[150%] mb-6">
          Edite ou compartilhe seus orçamentos.
        </p>

        <div>
          <Budget />
          <Budget />
          <Budget />
        </div>
      </div>
    </div>
  )
}
