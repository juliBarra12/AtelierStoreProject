import Link from 'next/link';
import { Artwork } from '@/types/artwork';

type ArtworkCardProps = {
    artwork: Artwork;
};

export function ArtworkCard({ artwork }: ArtworkCardProps) {
    const imageUrl = artwork.images?.[0];

    return (
        <article className="rounded-xl border p-4 shadow-sm">
            <div className="mb-4">
                <img 
                    src={imageUrl}
                    alt={artwork.title}
                    className="h-64 w-full rounded-lg object-cover"
                />
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold">{artwork.title}</h2>

                <p className="text-sm text-gray-600">{artwork.technique}</p>

                <p className="text-sm text-gray-600">
                    {artwork.widthCm} x {artwork.heightCm} cm
                </p>

                <p className="text-lg font-medium">
                    {artwork.currency} {artwork.price}
                </p>

                <p className="text-sm">
                    {artwork.available ? 'Disponible' : 'No disponible'}
                </p>

                <Link
                    href={`/artworks/${artwork.id}`}
                    className="inline-block rounded-md bg-black px-4 py-2 text-white"
                >
                    Ver detalle
                </Link>
            </div>
        </article>
    );
}