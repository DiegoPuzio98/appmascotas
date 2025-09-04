// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md text-center p-8 bg-white rounded-lg shadow">
        <h1 className="text-4xl font-bold text-blue-600">¡Hola Hackathon!</h1>
        <p className="mt-3 text-gray-600">Si ves este texto con estilo, Tailwind funciona ✅</p>
        <a href="/publicar" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded">Publicar</a>
      </div>
    </main>
  );
}