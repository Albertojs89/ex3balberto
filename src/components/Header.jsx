import Link from "next/link";




export default function Header() {
  return (
    <header className="w-full border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo y enlaces de navegación */}
        <div className="flex items-center gap-8">
        <img src="/Logo.png" alt="Logo Pandem" className="w-6 h-6" />

          <Link href="/" className="font-bold text-lg tracking-tight">
            Pandem
          </Link>
          
          <nav className="hidden md:flex gap-6 text-sm text-white/80">
            <Link href="/docs" className="hover:text-white transition">Docs</Link>
            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
            <span className="cursor-default text-white/30">Status</span>
            <span className="cursor-default text-white/30">FAQs</span>
            <span className="cursor-default text-white/30">Contact Us</span>
          </nav>
        </div>

        {/* Acciones: Login y Sign Up */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-white/80 hover:text-white transition">Login</button>
          <button>Sign Up</button>

        </div>
      </div>
    </header>
  );
}
