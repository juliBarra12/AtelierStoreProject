import Link from "next/link";


export default function HomePage() {

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center p6 text-center">
      <h1 className="text-4xl font-bold">Maritxu's Atelier Store</h1>
      
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        Una tienda online para exhibicion y venta de cuadros
      </p>

      <Link 
        href="/artworks"
        className="mt-8 rounded-md bg-black px-6 py-3 text-white"
      >
        Ver catálogo
      </Link>
    </main>
  );
}
