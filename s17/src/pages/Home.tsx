import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b p-4">
        <ul className="flex gap-4">
          <li><Link to="/" className="text-primary hover:underline">Home</Link></li>
        </ul>
      </nav>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to s17</h1>
        <p className="text-muted-foreground">React + shadcn/ui + Tailwind CSS + React Router</p>
      </main>
    </div>
  )
}
