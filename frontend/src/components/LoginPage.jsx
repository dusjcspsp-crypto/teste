import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Car } from 'lucide-react'

export function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulação de login - em produção, validar com backend
    if (credentials.username && credentials.password) {
      onLogin()
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#1E1E1E] border-gray-800">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center">
              <Car className="w-8 h-8 text-black" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Gestão Premium</CardTitle>
          <p className="text-gray-400">Sistema de Gestão Automotiva</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Usuário"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="bg-[#2A2A2A] border-gray-700 text-white"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="bg-[#2A2A2A] border-gray-700 text-white"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#FFD700] text-black hover:bg-[#E6C200] font-semibold"
            >
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
