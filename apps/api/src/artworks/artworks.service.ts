import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { GetArtworksQueryDto } from './dto/get-artworks-query-dto';
import { Artwork } from './entities/artwork.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArtworksService {
    constructor(private readonly prisma: PrismaService) {}


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
            collection: 'Abstractos',
            images: [`${this.baseUrl}/images/placeholder-artwork.jpg`],
            available: true,
            featured: true,
            createdAt: new Date().toISOString(),
        }
    ]

    async findAll(query: GetArtworksQueryDto) {
        return this.prisma.artwork.findMany({
            where: {
                collection: query.collection
                    ? { equals: query.collection, mode: 'insensitive' }
                    : undefined,
                technique: query.technique
                    ? { equals: query.technique, mode: 'insensitive' }
                    : undefined,
                available: query.available !== undefined ? query.available === 'true' : undefined,
                featured: query.featured !== undefined ? query.featured === 'true' : undefined, 
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    async findOne(id: string) {
        const artwork = await this.prisma.artwork.findUnique({
            where: { id },
        });

        if (!artwork) {
             throw new NotFoundException(`Artwork with id ${id} not found`);
        }

        return artwork;
    }

    async create(createArtworkDto: CreateArtworkDto) {
        return this.prisma.artwork.create({
            data: createArtworkDto,
        });
    }
}
