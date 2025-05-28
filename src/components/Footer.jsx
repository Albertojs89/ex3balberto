export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo + texto */}
        <div className="flex items-center gap-2">
          <img src="/Logo.png" alt="Logo Pandem" className="w-6 h-6" />
          <span className="font-semibold text-sm">Pandem</span>
        </div>

        {/* Enlaces */}
        <nav className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white transition">contact us</a>
          <a href="#" className="hover:text-white transition">terms of service</a>
        </nav>
      </div>
    </footer>
  );
}
