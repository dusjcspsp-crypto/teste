import { Bell, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
  return (
    <header className="bg-[#1E1E1E] border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar..."
              className="pl-10 bg-[#2A2A2A] border-gray-700 text-white"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
