import { useState, useEffect } from 'react'
import {
  Car,
  FileText,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Users
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#FFD700', '#10B981', '#EF4444', '#F59E0B']

export function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    customers: { total: 0, active: 0, vip: 0, newThisMonth: 0 },
    budgets: { total: 0, pending: 0, approved: 0, rejected: 0, totalValueThisMonth: 0 },
    vehicles: 0,
    financial: { totalReceitas: 0, totalDespesas: 0, receitasMes: 0, despesasMes: 0, lucroLiquidoMes: 0 },
    loading: true
  })

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const [customersResponse, budgetsResponse, vehiclesResponse, financialSummaryResponse] = await Promise.all([
        fetch("/customers/stats"),
        fetch("/budgets/stats"),
        fetch("/vehicles"),
        fetch("/financeiro/summary")
      ])

      const customersData = await customersResponse.json()
      const budgetsData = await budgetsResponse.json()
      const vehiclesData = await vehiclesResponse.json()
      const financialSummaryData = await financialSummaryResponse.json()

      setDashboardData({
        customers: customersData,
        budgets: budgetsData,
        vehicles: Array.isArray(vehiclesData) ? vehiclesData.length : 0,
        financial: financialSummaryData,
        loading: false
      })
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error)
      setDashboardData(prev => ({ ...prev, loading: false }))
    }
  }

  const budgetStatusData = [
    { name: 'Pendentes', value: dashboardData.budgets.pending, color: '#F59E0B' },
    { name: 'Aprovados', value: dashboardData.budgets.approved, color: '#10B981' },
    { name: 'Rejeitados', value: dashboardData.budgets.rejected, color: '#EF4444' }
  ]

  const monthlyData = [
    { name: 'Jan', receitas: 45000, despesas: 32000 },
    { name: 'Fev', receitas: 52000, despesas: 38000 },
    { name: 'Mar', receitas: 48000, despesas: 35000 },
    { name: 'Abr', receitas: 61000, despesas: 42000 },
    { name: 'Mai', receitas: 55000, despesas: 40000 },
    { name: 'Jun', receitas: 67000, despesas: 45000 }
  ]

  if (dashboardData.loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-400">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Visão geral do sistema de gestão automotiva</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-[#1E1E1E] border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total de Clientes</CardTitle>
            <Users className="h-4 w-4 text-[#FFD700]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{dashboardData.customers.total}</div>
            <p className="text-xs text-gray-400">
              +{dashboardData.customers.newThisMonth} novos este mês
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1E1E1E] border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Orçamentos</CardTitle>
            <FileText className="h-4 w-4 text-[#FFD700]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{dashboardData.budgets.total}</div>
            <p className="text-xs text-gray-400">
              R$ {dashboardData.budgets.totalValueThisMonth.toLocaleString('pt-BR')} este mês
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1E1E1E] border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Veículos no Pátio</CardTitle>
            <Car className="h-4 w-4 text-[#FFD700]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{dashboardData.vehicles}</div>
            <p className="text-xs text-gray-400">
              Em diferentes estágios
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1E1E1E] border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Lucro Líquido</CardTitle>
            <DollarSign className="h-4 w-4 text-[#FFD700]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              R$ {dashboardData.financial.lucroLiquidoMes.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-gray-400">
              Este mês
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1E1E1E] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Status dos Orçamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#1E1E1E] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Receitas vs Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '6px'
                  }}
                />
                <Bar dataKey="receitas" fill="#10B981" />
                <Bar dataKey="despesas" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
