import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { ControlePatioPage } from './components/ControlePatioPage'
import { OrcamentosPage } from './components/OrcamentosPage'
import { FinanceiroPage } from './components/FinanceiroPage'
import { AgendamentoPage } from './components/AgendamentoPage'
import { ClientesPage } from './components/ClientesPage'
import { FuncionariosPage } from './components/FuncionariosPage'
import { InventarioPage } from './components/InventarioPage'
import { RelatoriosPage } from './components/RelatoriosPage'
import { SuportePage } from './components/SuportePage'
import { PerfilPage } from './components/PerfilPage'
import { LoginPage } from './components/LoginPage'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-white flex">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
        
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <Header />
          
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/controle-patio" element={<ControlePatioPage />} />
              <Route path="/orcamentos" element={<OrcamentosPage />} />
              <Route path="/financeiro" element={<FinanceiroPage />} />
              <Route path="/agendamento" element={<AgendamentoPage />} />
              <Route path="/clientes" element={<ClientesPage />} />
              <Route path="/funcionarios" element={<FuncionariosPage />} />
              <Route path="/inventario" element={<InventarioPage />} />
              <Route path="/relatorios" element={<RelatoriosPage />} />
              <Route path="/suporte" element={<SuportePage />} />
              <Route path="/perfil" element={<PerfilPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
