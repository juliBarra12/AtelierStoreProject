import { getArtworkById } from "@/services/artworks";

type ArtworksDetailPageProps = {
    params: Promise<{
        id: string
    }>;
};

export const dynamic = 'force-dynamic';

export default async function ArtworkDetailPage({
    params,
}: ArtworksDetailPageProps) {
    const { id } = await params;
    const artwork = await getArtworkById(id);

    const imageUrl = artwork.images?.[0] || '/images/placeholder-artwork.jpg';

    return (
        <main className="mx-auto max-w-5xl p-6">
            <div className="grid gap8 md:grid-cols-2">
                <section>
                    <img 
                        src={imageUrl}
                        alt={artwork.title}
                        className="w-full rounded-xl object-cover"
                    />
                </section>

                <section className="space-y-4">
                    <h1 className="text-3xl font-bold">{artwork.title}</h1>

                    <p className="text-gray-600">{artwork.description}</p>

                    <p>
                        <span className="font-semibold">Técnica:</span> {artwork.technique}
                    </p>

                    <p>
                        <span className="font-semibold">Colección:</span> {artwork.collection}
                    </p>

                    <p>
                        <span className="font-semibold">Medidas:</span> {artwork.widthCm} x {artwork.heightCm} cm
                    </p>

                    <p className="text-2xl font-semibold">
                        {artwork.currency} {artwork.price}
                    </p>

                    <p>
                        <span className="font-semibold">Estado:</span>{' '}
                        {artwork.available ? 'Disponible' : 'No disponible'}
                    </p>
                
                </section>
            </div>
        </main>
    );
}