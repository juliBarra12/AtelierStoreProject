import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { GetArtworksQueryDto } from './dto/get-artworks-query-dto';
import { Artwork } from './entities/artwork.entity';

@Controller('artworks')
export class ArtworksController {
    constructor(private readonly artworksService: ArtworksService) {}

    @Get()
    findAll(@Query() query: GetArtworksQueryDto): Artwork[] {
        return this.artworksService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Artwork {
        return this.artworksService.findOne(id);
    }

    @Post()
    create(@Body() createArtworkDto: CreateArtworkDto): Artwork {
        return this.artworksService.create(createArtworkDto);
    }
}
