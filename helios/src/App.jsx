import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Enlist from './pages/Enlist'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="enlist" element={<Enlist />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
