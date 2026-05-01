import Link from 'next/link';
import { getArtworks } from '@/services/artworks';

export const dynamic = 'force-dynamic';

export default async function AdminArtworksPage() {
    const artworks = await getArtworks();

    return (
        <main className="mx-auto max-w-6xl p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text 3xl font-bold">Administrar obras</h1>
                    <p className="mt-2 text-gray-600">
                        Gestiona las obras publicadas en la tienda.
                    </p>
                </div>

                <Link 
                    href="/admin/artworks/new"
                    className="rounded-md bg-black px-4 py-2 text-white"
                >
                    Nueva obra
                </Link>
            </div>

            {artworks.length === 0 ? (
                <p>No hay artworks cargados.</p>
            ) : (
                <div className="overflow-x-auto rounded-xl border">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="border-b bg-gray-50 text-left">
                                <th className="p-4">Título</th>
                                <th className="p-4">Colección</th>
                                <th className="p-4">Técnica</th>
                                <th className="p-4">Precio</th>
                                <th className="p-4">Disponible</th>
                                <th className="p-4">Destacada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artworks.map((artwork) => (
                                <tr key={artwork.id} className="border-b">
                                    <td className="p-4">{artwork.title}</td>
                                    <td className="p-4">{artwork.collection}</td>
                                    <td className="p-4">{artwork.technique}</td>
                                    <td className="p-4">${artwork.currency} {artwork.price}</td>
                                    <td className="p-4">{artwork.available ? 'Sí' : 'No'}</td>
                                    <td className="p-4">{artwork.featured ? 'Sí' : 'No'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}