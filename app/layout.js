import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-white shadow p-4 flex justify-between max-w-3xl mx-auto z-50">
          <h1 className="font-bold text-xl text-black">Animales Salta</h1>
          <nav className="space-x-4 text-black">
            <Link href="/">Inicio</Link>
            <Link href="/publicar">Publicar</Link>
            <Link href="/legal">Legal</Link>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}

