import { NavLink } from 'react-router'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

export function Header({ pageTitle }: { pageTitle: string }) {
  return (
    <header className="fixed top-0 right-0 left-0 h-[72px] px-4 bg-zinc-100 flex items-center gap-2 justify-start border-b border-b-zinc-200 z-50">
      <NavLink to="/">
        <Button size="icon" variant="ghost">
          <ArrowLeft className="size-6" />
        </Button>
      </NavLink>
      <h1 className="text-xl leading-[150%] font-semibold">{pageTitle}</h1>
    </header>
  )
}
