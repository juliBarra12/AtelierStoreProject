export class Artwork {
    id: string;
    slug: string;
    title: string;
    description: string;
    price: number;
    currency: 'UYU' | 'USD';
    widthCm: number;
    heightCm: number;
    technique: string;
    collection: string;
    images: string [];
    available: boolean;
    featured: boolean;
    createdAt: string;
}