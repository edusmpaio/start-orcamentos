import { BrowserRouter, Routes, Route } from 'react-router'
import { App } from './app'
import { NewBudget } from './pages/new-budget'
import { EditProducts } from './pages/edit-products'
import { Budgets } from './pages/budgets'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new-budget" element={<NewBudget />} />
        <Route path="/edit-products" element={<EditProducts />} />
        <Route path="/budgets" element={<Budgets />} />
      </Routes>
    </BrowserRouter>
  )
}
