import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { GetArtworksQueryDto } from './dto/get-artworks-query-dto';
import { Artwork } from './entities/artwork.entity';

@Injectable()
export class ArtworksService {

    private readonly baseUrl = process.env.BASE_URL || 'http://localhost:4000';
    private artworks: Artwork[] = [
        {
            id: '1',
            slug: 'etnias-naomi',
            title: 'Naomi',
            description: '',
            price: 500,
            currency: 'USD',
            widthCm: 120,
            heightCm: 80,
            technique: 'Oleo sobre lienzo',
            collection: 'Etnias',
            images: [`${this.baseUrl}/images/placeholder-artwork.jpg`],
            available: true,
            featured: true,
            createdAt: new Date().toISOString(),
        },
        {
            id: '2',
            slug: 'etnias-juliana',
            title: 'Juliana',
            description: '',
            price: 6000,
            currency: 'UYU',
            widthCm: 120,
            heightCm: 80,
            technique: 'Oleo sobre lienzo',
            collection: 'Etnias',
            images: [`${this.baseUrl}/images/placeholder-artwork.jpg`],
            available: true,
            featured: true,
            createdAt: new Date().toISOString(),
        }
    ]

    findAll(query: GetArtworksQueryDto): Artwork[]{
        let results = [...this.artworks];

        if(query.collection) {
            results = results.filter(
                (artwork) =>
                    artwork.collection.toLowerCase() === query.collection!.toLowerCase(),
            );
        }

        if(query.technique) {
            results = results.filter(
                (artwork) =>
                    artwork.technique.toLowerCase() === query.technique!.toLowerCase(),
            );
        }

        if(query.available !== undefined) {
            const available = query.available === 'true';
            results = results.filter((artwork) => artwork.available === available);
        }

        if(query.featured !== undefined) {
            const featured = query.featured === 'true';
            results = results.filter((artwork) => artwork.featured === featured);
        }
        
        
        return results;
    }

    findOne(id: string): Artwork {
        const artwork = this.artworks.find((item) => item.id === id);

        if (!artwork) {
             throw new NotFoundException(`Artwork with id ${id} not found`);
        }

        return artwork;
    }

    create(createArtworkDto: CreateArtworkDto): Artwork {
        const newArtwork: Artwork = {
            id: String(this.artworks.length + 1),
            ...createArtworkDto,
            createdAt: new Date().toISOString(),
        };

        this.artworks.push(newArtwork);

        return newArtwork;
    }
}
