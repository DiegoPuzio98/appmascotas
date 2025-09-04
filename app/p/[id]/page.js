// app/p/[id]/page.js
export default function Post({ params }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Aviso: {params.id}</h1>
      <p>Detalles del post aquí...</p>
    </div>
  );
}
