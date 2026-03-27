import { ArtworkCard } from '@/components/artworks/artwork-card';
import { getArtworks} from '@/services/artworks';

export const dynamic = 'force-dynamic';

export default async function ArtworksPage() {
    const artworks = await getArtworks();

    return (
        <main className="mx-auto max-w-6xl p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Catálogo de obras</h1>
                <p className="mt-2 text-gray-600">
                    Explorá las obras disponibles en la tienda.
                </p>
            </header>

            {artworks.length === 0 ? (
                <p>No hay obras disponibles.</p>
            ) : (
                <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {artworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </section>
            )}

        </main>
    );
}
