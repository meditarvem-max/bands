import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4">Neon Sunset</h1>
        <p className="text-xl mb-8">Gerencie sua banda indie como um pro.</p>
        <Link href="/login">
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-200">
            Entrar no Manager
          </Button>
        </Link>
      </div>
    </div>
  )
}
