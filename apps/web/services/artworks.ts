import { env } from '@/lib/env';
import { Artwork } from '@/types/artwork';

export type GetArtworksFilters = {
    collection?: string;
    technique?: string;
    available?: string;
    featured?: string;
};

export async function getArtworks(
    filters?: GetArtworksFilters,
): Promise<Artwork[]> {
    const params = new URLSearchParams();

    if (filters?.collection) {
        params.set('collection', filters.collection);
    }

    if (filters?.technique) {
        params.set('technique', filters.technique);
    }

    if (filters?.available) {
        params.set('available', filters.available);
    }

    if (filters?.featured) {
        params.set('featured', filters.featured);
    }
    const queryString = params.toString();
    const url = queryString
        ? `${env.apiUrl}/artworks?${queryString}`
        : `${env.apiUrl}/artworks`;

    const response = await fetch(url, {
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