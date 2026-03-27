import { ArtworkCard } from '@/components/artworks/artwork-card';
import { getArtworks} from '@/services/artworks';

export const dynamic = 'force-dynamic';

type ArtworksPageProps = {
    searchParams: Promise<{
        collection?: string;
        technique?: string;
        available?: string;
        featured?: string;
    }>;
};

export default async function ArtworksPage({
    searchParams,
}: ArtworksPageProps) {
    const filters = await searchParams;
    
    const artworks = await getArtworks({
        collection: filters.collection,
        technique: filters.technique,
        available: filters.available,
        featured: filters.featured,
    });

    return (
        <main className="mx-auto max-w-6xl p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Catálogo de obras</h1>
                <p className="mt-2 text-gray-600">
                    Explorá las obras disponibles en la tienda.
                </p>
            </header>

            <section className="mb-8">
                <div className="flex flex-wrap gap-3">
                    <a
                    href="/artworks"
                    className="rounded border px-4 py-2 text-sm"
                    >
                        Todas
                    </a>
                    <a
                    href="/artworks?featured=true"
                    className="rounded border px-4 py-2 text-sm"
                    >
                        Destacadas
                    </a>
                    <a
                    href="/artworks?collection=etnias"
                    className="rounded border px-4 py-2 text-sm"
                    >
                        Etnias
                    </a>
                    <a
                    href="/artworks?collection=abstractos"
                    className="rounded border px-4 py-2 text-sm"
                    >
                        Abstractos
                    </a>
                </div>
            </section>
            
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
