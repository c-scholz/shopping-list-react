import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AppNav } from './modules/Layout/AppNav'
import { Dashboard } from './modules/Views/Dashboard'
import { List } from './modules/Views/List'
import { NotFound } from './modules/Views/NotFound'

function App() {
  return (
    <>
      <header>
        <AppNav></AppNav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
