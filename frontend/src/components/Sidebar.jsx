import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Construction, 
  FileText, 
  DollarSign, 
  Calendar, 
  Settings, 
  Users, 
  User, 
  Package, 
  BarChart3, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Car
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuItems = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: Home, 
    path: '/dashboard' 
  },
  { 
    id: 'controle-patio', 
    label: 'Controle de Pátio', 
    icon: Construction, 
    path: '/controle-patio' 
  },
  { 
    id: 'orcamentos', 
    label: 'Orçamentos', 
    icon: FileText, 
    path: '/orcamentos' 
  },
  { 
    id: 'financeiro', 
    label: 'Financeiro', 
    icon: DollarSign, 
    path: '/financeiro' 
  },
  { 
    id: 'agendamento', 
    label: 'Agendamento', 
    icon: Calendar, 
    path: '/agendamento' 
  },
  {
    id: 'gestao',
    label: 'Gestão',
    icon: Settings,
    isGroup: true,
    children: [
      { 
        id: 'clientes', 
        label: 'Clientes', 
        icon: Users, 
        path: '/clientes' 
      },
      { 
        id: 'funcionarios', 
        label: 'Funcionários', 
        icon: User, 
        path: '/funcionarios' 
      },
      { 
        id: 'inventario', 
        label: 'Inventário', 
        icon: Package, 
        path: '/inventario' 
      },
      { 
        id: 'relatorios', 
        label: 'Relatórios', 
        icon: BarChart3, 
        path: '/relatorios' 
      }
    ]
  },
  { 
    id: 'suporte', 
    label: 'Suporte', 
    icon: HelpCircle, 
    path: '/suporte' 
  }
]

export function Sidebar({ collapsed, onToggle }) {
  const location = useLocation()
  const [expandedGroups, setExpandedGroups] = useState(['gestao'])

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    )
  }

  const isActive = (path) => location.pathname === path

  return (
    <div className={`fixed left-0 top-0 h-full bg-[#1E1E1E] border-r border-gray-800 transition-all duration-300 z-50 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-black" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Gestão Premium</h1>
              <p className="text-xs text-gray-400">Sistema de Gestão Automotiva</p>
            </div>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="text-gray-400 hover:text-white hover:bg-gray-700"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-2 space-y-1">
        {menuItems.map((item) => {
          if (item.isGroup) {
            const isExpanded = expandedGroups.includes(item.id)
            
            return (
              <div key={item.id}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left text-gray-300 hover:text-white hover:bg-gray-700 ${
                    collapsed ? 'px-2' : 'px-3'
                  }`}
                  onClick={() => !collapsed && toggleGroup(item.id)}
                >
                  <item.icon className={`w-5 h-5 ${collapsed ? '' : 'mr-3'}`} />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      }`} />
                    </>
                  )}
                </Button>
                
                {!collapsed && isExpanded && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        to={child.path}
                        className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive(child.path)
                            ? 'bg-[#FFD700] text-black font-medium'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        }`}
                      >
                        <child.icon className="w-4 h-4 mr-3" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center rounded-md text-sm transition-colors ${
                collapsed ? 'px-2 py-3 justify-center' : 'px-3 py-2'
              } ${
                isActive(item.path)
                  ? 'bg-[#FFD700] text-black font-medium'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <item.icon className={`w-5 h-5 ${collapsed ? '' : 'mr-3'}`} />
              {!collapsed && item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
