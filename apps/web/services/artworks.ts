import { env } from '@/lib/env';
import { Artwork } from '@/types/artwork';

export async function getArtworks(): Promise<Artwork[]> {
    const response = await fetch(`${env.apiUrl}/artworks`, {
        cache: 'no-store',
    });

    if(!response.ok) {
        throw new Error('Could not get artworks');
    }

    return response.json();
}

export async function getArtworkById(id: string): Promise<Artwork> {
    const response = await fetch(`${env.apiUrl}/artworks/${id}`, {
        cache: 'no-store',
    });

    if(!response.ok) {
        throw new Error(`Could not get artwork with id ${id}`);
    }

    return response.json();
}