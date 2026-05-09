import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
